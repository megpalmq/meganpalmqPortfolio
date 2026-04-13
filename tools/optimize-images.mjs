import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

function parseArgs(argv) {
  const options = {
    dir: path.resolve(process.cwd(), "src/lib/images"),
    dryRun: false,
    maxWidth: 2000,
    quality: 74,
    pngQuality: 78,
    minSizeKb: 120,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (token.startsWith("--dir=")) {
      options.dir = path.resolve(process.cwd(), token.split("=")[1]);
      continue;
    }

    if (token === "--dir") {
      const value = argv[index + 1];
      if (value) {
        options.dir = path.resolve(process.cwd(), value);
        index += 1;
      }
      continue;
    }

    if (token.startsWith("--max-width=")) {
      options.maxWidth = Number(token.split("=")[1]) || options.maxWidth;
      continue;
    }

    if (token.startsWith("--quality=")) {
      options.quality = Number(token.split("=")[1]) || options.quality;
      continue;
    }

    if (token.startsWith("--png-quality=")) {
      options.pngQuality = Number(token.split("=")[1]) || options.pngQuality;
      continue;
    }

    if (token.startsWith("--min-size-kb=")) {
      options.minSizeKb = Number(token.split("=")[1]) || options.minSizeKb;
    }
  }

  return options;
}

async function collectImageFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectImageFiles(fullPath)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (SUPPORTED_EXTENSIONS.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeFile(filePath, options) {
  const extension = path.extname(filePath).toLowerCase();
  const originalBuffer = await fs.readFile(filePath);
  const originalSize = originalBuffer.length;

  if (originalSize < options.minSizeKb * 1024) {
    return {
      status: "skipped-small",
      filePath,
      originalSize,
      optimizedSize: originalSize,
    };
  }

  let pipeline = sharp(originalBuffer, { failOn: "none" }).rotate();
  const metadata = await pipeline.metadata();

  if (!metadata.width || !metadata.height) {
    return {
      status: "skipped-unreadable",
      filePath,
      originalSize,
      optimizedSize: originalSize,
    };
  }

  const resizeNeeded = metadata.width > options.maxWidth;

  if (resizeNeeded) {
    pipeline = pipeline.resize({
      width: options.maxWidth,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: options.quality,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    });
  } else if (extension === ".png") {
    pipeline = pipeline.png({
      quality: options.pngQuality,
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: true,
      effort: 9,
    });
  } else if (extension === ".webp") {
    pipeline = pipeline.webp({
      quality: options.quality,
      effort: 6,
    });
  } else if (extension === ".avif") {
    pipeline = pipeline.avif({
      quality: Math.min(options.quality, 50),
      effort: 7,
    });
  }

  const optimizedBuffer = await pipeline.toBuffer();
  const optimizedSize = optimizedBuffer.length;

  if (!resizeNeeded && optimizedSize >= originalSize) {
    return {
      status: "skipped-no-gain",
      filePath,
      originalSize,
      optimizedSize,
    };
  }

  if (!options.dryRun) {
    await fs.writeFile(filePath, optimizedBuffer);
  }

  return {
    status: options.dryRun ? "would-optimize" : "optimized",
    filePath,
    originalSize,
    optimizedSize,
  };
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const imageRootExists = await fs
    .access(options.dir)
    .then(() => true)
    .catch(() => false);

  if (!imageRootExists) {
    console.error(`Image directory not found: ${options.dir}`);
    process.exitCode = 1;
    return;
  }

  const files = await collectImageFiles(options.dir);

  if (files.length === 0) {
    console.log("No supported image files were found.");
    return;
  }

  let optimizedCount = 0;
  let skippedNoGain = 0;
  let skippedSmall = 0;
  let skippedUnreadable = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  console.log(`Found ${files.length} images in ${options.dir}`);
  console.log(
    `Mode: ${options.dryRun ? "dry run" : "write"}, maxWidth=${options.maxWidth}, quality=${options.quality}, pngQuality=${options.pngQuality}`,
  );

  for (const filePath of files) {
    const result = await optimizeFile(filePath, options);

    totalBefore += result.originalSize;
    totalAfter += result.optimizedSize;

    if (result.status === "optimized" || result.status === "would-optimize") {
      optimizedCount += 1;
      const delta = result.originalSize - result.optimizedSize;
      const percent = (delta / result.originalSize) * 100;
      console.log(
        `${result.status.padEnd(14)} ${path.relative(process.cwd(), result.filePath)} ${formatBytes(result.originalSize)} -> ${formatBytes(result.optimizedSize)} (${percent.toFixed(1)}%)`,
      );
      continue;
    }

    if (result.status === "skipped-no-gain") {
      skippedNoGain += 1;
      continue;
    }

    if (result.status === "skipped-small") {
      skippedSmall += 1;
      continue;
    }

    skippedUnreadable += 1;
  }

  const totalDelta = totalBefore - totalAfter;
  const percentSaved = totalBefore > 0 ? (totalDelta / totalBefore) * 100 : 0;

  console.log("\nSummary");
  console.log(`optimized: ${optimizedCount}`);
  console.log(`skipped (small): ${skippedSmall}`);
  console.log(`skipped (no gain): ${skippedNoGain}`);
  console.log(`skipped (unreadable): ${skippedUnreadable}`);
  console.log(
    `size: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} (${percentSaved.toFixed(1)}% saved)`,
  );
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

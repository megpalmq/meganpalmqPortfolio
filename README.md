# Megan Palmquist Portfolio

## Image Optimization Workflow

Run this before shipping updates with new screenshots or project art.

- Dry run (preview savings only): `npm run images:optimize:dry`
- Apply optimizations in place: `npm run images:optimize`

The optimizer currently scans `src/lib/images` and will:

- Resize images wider than 2000px
- Recompress JPG, PNG, WebP, and AVIF files
- Skip tiny files under 120KB by default

Optional flags:

- `--dir=src/lib/images`
- `--max-width=1800`
- `--quality=72`
- `--png-quality=78`
- `--min-size-kb=80`
- `--dry-run`

Example:

```bash
node tools/optimize-images.mjs --max-width=1800 --quality=72 --dry-run
```

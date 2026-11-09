import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Pin the Vercel runtime so Node 26 can build and run this project.
    adapter: adapter({ runtime: "nodejs26.x" }),
  },
};

export default config;

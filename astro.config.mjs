// @ts-check
import { defineConfig } from 'astro/config';

// User-site repo (Ashutosh0624.github.io) => served from the root, so no `base` needed.
export default defineConfig({
  site: 'https://ashutosh0624.github.io',
  trailingSlash: 'ignore',
});

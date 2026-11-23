import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PAGES_SITE ?? 'https://3strategy.github.io',
  base: process.env.PAGES_BASE ?? '/',
  output: 'static',
  devToolbar: { enabled: false },
});

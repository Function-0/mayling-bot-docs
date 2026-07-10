import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://function-0.github.io',
  base: '/mayling-bot-docs',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});

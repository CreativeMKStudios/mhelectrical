// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://creativemkstudios.github.io',
  base: '/mhelectrical',
  trailingSlash: 'always',
  prefetch: true,
  integrations: [sitemap()],
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://darjidev555.github.io',
  base: '/',
  integrations: [tailwind(), sitemap()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://cc4.marketing',
  integrations: [mdx()],
  output: 'static',
});

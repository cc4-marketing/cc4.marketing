// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cc4.marketing',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const url = item.url;
        
        // Homepage - highest priority
        if (url === 'https://cc4.marketing/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Download page - high priority (conversion)
        else if (url.includes('/download')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Module 0 - Getting Started (entry point)
        else if (url.includes('/modules/0/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Module 1 - Core lessons
        else if (url.includes('/modules/1/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Module 2 - Advanced lessons
        else if (url.includes('/modules/2/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Default
        else {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        
        return item;
      },
    }),
  ],
  output: 'static',
});

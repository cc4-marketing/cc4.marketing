import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const modulesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/modules' }),
  schema: z.object({
    title: z.string(),
    module: z.number(),
    lesson: z.number(),
    description: z.string(),
    duration: z.string().optional(),
    objectives: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

const bonusCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/bonus' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  modules: modulesCollection,
  bonus: bonusCollection,
};

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    thumbnail: z.object({
      image: z.string(),
      alt: z.string(),
    }),
  }),
});

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    thumbnail: z.object({
      image: z.string(),
      alt: z.string(),
    }),
    gallery: z.array(z.object({
      image: z.string(),
      alt: z.string(),
    })),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, projets };
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      translationKey: z.string(), // links the versions of the same post in the 3 languages (the slug is the file name and can differ)
      title: z.string(),
      seoTitle: z.string().optional(), // the page's <title> (up to ~60 characters); default: title
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(), // the post's last update; default: date
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };

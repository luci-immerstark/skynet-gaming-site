import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      translationKey: z.string(), // liga as versões do mesmo post nos 3 idiomas (o slug é o nome do arquivo e pode variar)
      title: z.string(),
      seoTitle: z.string().optional(), // <title> da página (até ~60 caracteres); padrão: title
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(), // última atualização do post; padrão: date
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };

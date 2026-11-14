import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Naya project add karna = src/content/projects/ mein ek .md file.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    code: z.string(),                       // e.g. PRJ-01
    order: z.number(),                      // homepage pe sort order
    status: z.enum(['Released', 'In development', 'Paper in prep', 'Design phase', 'Planned']),
    tagline: z.string(),
    meta: z.string().optional(),            // measured facts only
    stack: z.array(z.string()),
    category: z.enum(['systems', 'embedded', 'ml-formal']),
    repo: z.string().url().optional(),      // sirf public repos
    target: z.string().optional(),          // target venue / milestone
  }),
});

export const collections = { projects };

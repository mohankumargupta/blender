import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// blender: defineCollection({ loader: docsLoader(), schema: docsSchema({
	// 	extend: z.object({
	// 		toaster: z.string().default("")
	// 	})
	// }) }),
};

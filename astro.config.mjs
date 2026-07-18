// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Blender for Absolute Beginners',
          sidebar: [
              {
                  label: 'Examples',
                  items: [{ autogenerate: { directory: 'examples' }   }],
              },
              {
                  label: 'Fundamentals',
                  items: [{ autogenerate: { directory: 'fundamentals' } }],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
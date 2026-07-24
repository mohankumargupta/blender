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
              { label: 'Introduction', link: '/docs/introduction/' },
              {
                  label: 'Examples',
                  items: [{ autogenerate: { directory: 'docs/examples' } }],
              },
              {
                  label: 'Fundamentals',
                  items: [{ autogenerate: { directory: 'docs/fundamentals' } }],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});

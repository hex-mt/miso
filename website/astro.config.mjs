// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dylancobb92.github.io',
  base: '/miso',
  vite: {
    plugins: [tailwindcss()],
  },
});
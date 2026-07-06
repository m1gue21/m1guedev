// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/** Canonical site URL — override with SITE env var in Vercel (e.g. custom domain) */
const site = process.env.SITE ?? 'https://m1guedev.vercel.app';

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import netlifyAdapter from '@sveltejs/adapter-netlify';

export default defineConfig({
  plugins: [sveltekit()],

  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },

  kit: {
    adapter: netlifyAdapter({
      edge: true,
      split: false
    })
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
});

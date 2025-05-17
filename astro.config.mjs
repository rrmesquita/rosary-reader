// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), alpinejs()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.bunny(),
        name: "Merriweather",
        cssVariable: "--font-serif",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

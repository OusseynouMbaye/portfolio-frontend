import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "tailwindcss/nesting": {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/svg", "@nuxtjs/color-mode"],
  components: true,
  head: {
    title: "Ousseynou : Programmeur Analyste",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This is an awesome description of my Nuxt app",
      },
    ],
    script: [
      { src: "/resources/assets/js/customjs1.js", body: true },
      { src: "/resources/assets/js/theme-change.js", body: true },
    ],
  },
});

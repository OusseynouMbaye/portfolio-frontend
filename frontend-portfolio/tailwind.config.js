module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
   
    //"./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {},
  },
  plugins: [
   // require("daisyui"),
  
  ],

  // daisyUI config (optional)
  daisyui: {
    // themes: ["dark"],
  },
};

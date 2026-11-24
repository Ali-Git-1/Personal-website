export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  app: {
    baseURL: "/Personal-website/",
    buildAssetsDir: "assets",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/Personal-website/favicon.ico",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  // 👇 این بخش برای استقرار روی GitHub Pages اضافه شد
  app: {
    baseURL: "/Personal-website/", // اسم دقیق ریپازیتوری
    buildAssetsDir: "assets", // تغییر نام پوشه _nuxt به assets تا گیت‌هاب فایل‌ها رو بلاک نکنه
  },

  // اختیاری ولی مفید برای تولید استاتیک بی‌نقص
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});

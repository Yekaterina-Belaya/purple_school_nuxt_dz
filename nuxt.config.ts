// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
  },

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8080",
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/scripts", "@nuxt/ui"],
});

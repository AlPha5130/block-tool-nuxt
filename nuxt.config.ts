// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    authSecret: 'INVALID',
    clientId: 'INVALID',
    clientSecret: 'INVALID',
    public: {},
  },
  alias: {
    cookie: 'cookie',
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
})

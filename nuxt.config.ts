// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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

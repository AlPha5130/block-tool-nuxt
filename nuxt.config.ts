// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  typescript: {
    tsConfig: {
      vueCompilerOptions: {
        plugins: ['@vue/language-plugin-pug'],
      },
    },
  },
  runtimeConfig: {
    oauth: {
      github: {
        clientId: '',
        clientSecret: '',
      },
    },
    public: {},
  },
  modules: [
    '@vueuse/nuxt',
    'nuxt-auth-utils',
    '@nuxtjs/i18n',
    '@unocss/nuxt',
    '@netlify/nuxt',
  ],
  routeRules: {
    '/auth': { redirect: '/auth/login' },
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-Hans', name: '简体中文', file: 'zh-Hans.json' },
    ],
    strategy: 'no_prefix',
  },
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss','@nuxt/content', 'nuxt-icon'],
  css: ['~/assets/base.css']
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          // Remix-icon
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css'
        },
        {
          // MinSans font
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/poposnail61/min-sans@main/web/css/minsansvf-dynamic-subset.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
        }
      ]
    }
  },
  css: ['~/assets/scss/fonts.scss'],
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY
    }
  },
  ssr: false,  // 클라이언트 사이드 렌더링만 사용
  app: {
    head: {
      script: [
        {
          src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=76ad6b7f2886a2069792b36501302db7`,
          defer: true
        }
      ]
    }
  }
})


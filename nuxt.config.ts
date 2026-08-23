// https://nuxt.com/docs/api/configuration/nuxt-config
// A publikus alap-URL: productionben SITE_URL env-vel felülírható (pl. https://www.sieger.hu)
const siteUrl = process.env.SITE_URL || 'https://sieger.hu';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@nuxtjs/i18n',
        '@nuxt/content',
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        families: {
            Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
        display: 'swap',
        subsets: ['latin', 'latin-ext'],
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            ],
            meta: [
                { name: 'theme-color', content: '#0b1e33' },
                { property: 'og:site_name', content: 'Sieger Sport Bár' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
        },
    },
    colorMode: {
        preference: 'dark',
        fallback: 'dark',
        classSuffix: '',
    },
    i18n: {
        langDir: 'locales',
        locales: [
            { code: 'hu', file: 'hu.json', language: 'hu' },
            { code: 'en', file: 'en.json', language: 'en' },
            { code: 'de', file: 'de.json', language: 'de' },
        ],
        defaultLocale: 'hu',
        strategy: 'prefix_except_default',
        baseUrl: siteUrl,
    },
    css: ['~/assets/css/main.css'],
    typescript: {
        nodeTsConfig: {
            compilerOptions: {
                // a nuxt.config.ts process.env használatához (@types/node)
                types: ['node'],
            },
        },
    },
    runtimeConfig: {
        directusToken: process.env.DIRECTUS_TOKEN,
        public: {
            directusUrl: process.env.DIRECTUS_URL,
            siteUrl,
        },
    },
});

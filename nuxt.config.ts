// https://nuxt.com/docs/api/configuration/nuxt-config
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
        },
    },
    colorMode: {
        preference: 'dark',
        fallback: 'dark',
        classSuffix: '',
    },
    i18n: {
        lazy: true,
        langDir: 'locales',
        locales: [
            { code: 'hu', file: 'hu.json' },
            { code: 'en', file: 'en.json' },
            { code: 'de', file: 'de.json' },
        ],
        defaultLocale: 'hu',
        strategy: 'prefix_except_default',
    },
    css: ['~/assets/css/main.css'],
});

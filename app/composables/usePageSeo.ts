const OG_LOCALES: Record<string, string> = {
    hu: 'hu_HU',
    en: 'en_US',
    de: 'de_DE',
};

interface PageSeoOptions {
    title: string;
    description: string;
    /** Az oldal saját megosztóképe; alapértelmezés az og-image.jpg */
    image?: string;
}

/**
 * Per-oldali SEO meta: title, description, Open Graph, Twitter card és canonical.
 * A canonical + hreflang alternatívákat az app.vue adja hozzá globálisan (useLocaleHead).
 */
export function usePageSeo({ title, description, image }: PageSeoOptions) {
    const { locale } = useI18n();
    const route = useRoute();
    const siteUrl = useRuntimeConfig().public.siteUrl as string;

    const ogImage = computed(() => new URL(image ?? '/og-image.jpg', siteUrl).href);

    const canonical = computed(() => {
        const path = route.path === '/' ? '' : route.path;
        return `${siteUrl}${path}`;
    });

    useHead(() => ({
        title,
        meta: [
            { name: 'description', content: description },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: canonical.value },
            { property: 'og:locale', content: OG_LOCALES[locale.value] ?? 'hu_HU' },
            { property: 'og:image', content: ogImage.value },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: ogImage.value },
        ],
    }));
}

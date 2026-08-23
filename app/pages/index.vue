<template>
  <div>
    <SectionsHeroSection />
    <SectionsBookingSection id="about" />
    <SectionsWeeklySpecialsSection id="specials" />
    <SectionsMenusSection id="menu" />
    <SectionsDrinkSpecialsSection id="drinks" />
    <SectionsStarting11Section id="starting11" />
    <SectionsMatchesSection id="matches" />
    <SectionsGallerySection id="gallery" />
  </div>
</template>

<script setup>
const { t } = useI18n();

usePageSeo({
    title: t('pages.home.title'),
    description: t('pages.home.description'),
});

// Restaurant (schema.org) strukturált adat a helyi kereshetőséghez
const siteUrl = useRuntimeConfig().public.siteUrl;
const { data: settings } = await useFetch('/api/site-settings');
useHead(() => ({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Restaurant',
                name: 'Sieger Sport Bár',
                url: siteUrl,
                image: `${siteUrl}/og-image.jpg`,
                telephone: settings.value?.phone || '+36 20 615 6491',
                email: settings.value?.email || 'info@sieger.hu',
                priceRange: '$$',
                servesCuisine: ['Magyar konyha', 'Nemzetközi konyha'],
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Egyetem tér 1.',
                    postalCode: '9026',
                    addressLocality: 'Győr',
                    addressCountry: 'HU',
                },
                openingHoursSpecification: settings.value?.openingHoursSpecification ?? [],
                sameAs: [
                    'https://www.facebook.com/siegersportbar',
                    'https://www.instagram.com/siegersportbar/',
                ],
            }),
        },
    ],
}));
</script>

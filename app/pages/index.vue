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

useHead(() => ({
  title: t('pages.home.title'),
  meta: [
    { name: 'description', content: t('pages.home.description') }
  ]
}))
</script>

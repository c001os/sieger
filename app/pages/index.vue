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
useHead({
  title: 'Sieger Sport Bár - Győr',
  meta: [
    { name: 'description', content: 'Élvezz ki mindent a maga idejében! Sportélmény, magyar és nemzetközi étel különlegességek egy helyen.' }
  ]
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.preference = 'dark';

// Canonical + hreflang alternatívák (a `baseUrl`-t a nuxt.config i18n.baseUrl adja)
const head = useLocaleHead({ dir: true, lang: true, seo: true });
useHead(() => ({
    htmlAttrs: {
        lang: head.value.htmlAttrs.lang,
        dir: head.value.htmlAttrs.dir,
    },
    link: head.value.link,
    meta: head.value.meta,
}));
</script>

<script setup>
const { t } = useI18n();

usePageSeo({
    title: t('pages.starting11.title'),
    description: t('pages.starting11.description'),
});
</script>

<template>
    <div>
        <SectionsStarting11Section />
    </div>
</template>

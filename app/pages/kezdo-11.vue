<script setup>
const { t } = useI18n();

useHead(() => ({
    title: t('pages.starting11.title'),
    meta: [
        {
            name: 'description',
            content: t('pages.starting11.description'),
        },
    ],
}));
</script>

<template>
    <div>
        <SectionsStarting11Section />
    </div>
</template>

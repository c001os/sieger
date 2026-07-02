<script setup>
const { locale, setLocale, locales } = useI18n();

const availableLocales = computed(() => {
    return locales.value.map((l) => {
        const code = typeof l === 'string' ? l : l.code;
        return {
            label: code.toUpperCase(),
            onSelect: () => setLocale(code),
        };
    });
});
</script>

<template>
    <UDropdownMenu
        :items="availableLocales"
        :popper="{ placement: 'bottom-end' }"
    >
        <UButton
            color="neutral"
            variant="ghost"
            :label="locale.toUpperCase()"
            trailing-icon="i-lucide-chevron-down"
            size="xs"
            class="hover:bg-muted"
        />
    </UDropdownMenu>
</template>

<script setup>
const { locale, setLocale, locales } = useI18n();

const FLAG_FILES = {
    hu: '/ikonok/zaszlo_hu.svg',
    en: '/ikonok/zaszlo_gb.svg',
    de: '/ikonok/zaszlo_de.svg',
};

const LANGUAGE_NAMES = {
    hu: 'Magyar',
    en: 'English',
    de: 'Deutsch',
};

const availableLocales = computed(() => {
    return locales.value.map((l) => {
        const code = typeof l === 'string' ? l : l.code;
        return {
            code,
            label: LANGUAGE_NAMES[code] ?? code.toUpperCase(),
            onSelect: () => setLocale(code),
        };
    });
});

function flagUrl(code) {
    return FLAG_FILES[code] ?? '';
}

function currentLanguageName() {
    return LANGUAGE_NAMES[locale.value] ?? locale.value.toUpperCase();
}
</script>

<template>
    <UDropdownMenu
        :items="availableLocales"
        :popper="{ placement: 'bottom-end' }"
        :modal="false"
    >
        <template #item-leading="{ item }">
            <img
                :src="flagUrl(item.code)"
                alt=""
                class="w-5 h-[15px] object-cover rounded-[2px] ring-1 ring-default/20 shrink-0"
            />
        </template>

        <UButton
            color="neutral"
            variant="ghost"
            size="xs"
            class="hover:bg-muted gap-1.5"
            :aria-label="currentLanguageName()"
        >
            <img
                :src="flagUrl(locale)"
                :alt="currentLanguageName()"
                class="w-5 h-[15px] object-cover rounded-[2px] ring-1 ring-default/20"
            />
            <UIcon
                name="i-lucide-chevron-down"
                class="w-3.5 h-3.5"
            />
        </UButton>
    </UDropdownMenu>
</template>

<script setup>
const { locale } = useI18n();

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

const { data: items, pending } = await useFetch('/api/drink-specials');
</script>

<template>
    <section class="bg-muted border-t border-default">
        <div
            v-if="pending"
            class="text-center py-12"
        >
            <UIcon
                name="i-lucide-loader-2"
                class="w-8 h-8 animate-spin text-primary"
            />
        </div>

        <div
            v-else-if="items && items.length"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
            <!-- Text Block -->
            <div
                class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-b border-default"
            >
                <h2 class="text-3xl font-black text-default uppercase tracking-wider mb-4">
                    {{ text(items[0].titleTop) }}<br /><span class="text-primary">{{ text(items[0].titleBottom) }}</span>
                </h2>
                <div class="w-12 h-1 bg-primary mb-6"></div>
                <p class="text-muted">{{ text(items[0].description) }}</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-b border-default overflow-hidden group">
                <img
                    :src="items[1].image"
                    :alt="$t('sections.drink_specials.image_alt', { n: 1 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div
                class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-b border-default hidden lg:flex"
            >
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-2">{{ text(items[2].titleTop) }}<br />{{ text(items[2].titleBottom) }}</h3>
                <p class="text-sm text-muted">{{ text(items[2].description) }}</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-b border-default overflow-hidden group">
                <img
                    :src="items[3].image"
                    :alt="$t('sections.drink_specials.image_alt', { n: 2 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-default overflow-hidden group hidden lg:block">
                <img
                    :src="items[4].image"
                    :alt="$t('sections.drink_specials.image_alt', { n: 3 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-default">
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-2">{{ text(items[5].titleTop) }}<br />{{ text(items[5].titleBottom) }}</h3>
                <p class="text-sm text-muted">{{ text(items[5].description) }}</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-default overflow-hidden group">
                <img
                    :src="items[6].image"
                    :alt="$t('sections.drink_specials.image_alt', { n: 4 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated">
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-4">{{ text(items[7].titleTop) }}</h3>
                <UButton
                    to="#menu"
                    color="primary"
                    variant="ghost"
                    class="uppercase tracking-widest font-bold px-0 hover:bg-transparent hover:text-inverted"
                >
                    {{ $t('nav.drinks_menu') }}
                    <UIcon
                        name="i-lucide-arrow-right"
                        class="ml-2 w-4 h-4"
                    />
                </UButton>
            </div>
        </div>
    </section>
</template>

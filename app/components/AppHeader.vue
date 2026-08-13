<template>
    <header class="fixed top-0 w-full z-50 bg-default/90 backdrop-blur-md border-b border-default text-default">
        <UContainer class="flex items-center justify-between h-20 max-w-none">
            <!-- Logo -->
            <NuxtLink
                :to="localePath('/')"
                class="flex-shrink-0"
            >
                <img
                    src="/media/logos/sieger_feher_logo.png"
                    alt="Sieger Logo"
                    class="h-12 w-auto invert dark:invert-0"
                />
            </NuxtLink>

            <!-- Desktop Nav -->
            <nav class="hidden xl:flex items-center gap-6 2xl:gap-8 whitespace-nowrap font-medium text-sm tracking-widest uppercase">
                <NuxtLink
                    :to="localePath('/')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.start') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#about')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.about') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#specials')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.specials') }}</NuxtLink
                >
                <UDropdownMenu
                    :items="offerItems"
                    :popper="{ placement: 'bottom-start' }"
                    :modal="false"
                >
                    <button
                        class="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest"
                    >
                        {{ $t('nav.food_menu') }}
                        <UIcon
                            name="i-lucide-chevron-down"
                            class="w-4 h-4"
                        />
                    </button>
                </UDropdownMenu>
                <NuxtLink
                    :to="localePath('/itallap')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.drinks_menu') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/esemenyek')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.events') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#gallery')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.gallery') }}</NuxtLink
                >
                <!-- Kiemelt asztalfoglalás gomb -->
                <UButton
                    color="primary"
                    variant="solid"
                    class="uppercase tracking-widest font-bold"
                    @click="isBookingOpen = true"
                >
                    {{ $t('buttons.book_table') }}
                </UButton>
            </nav>

            <!-- Right Actions (Lang + Social + Theme) -->
            <div class="flex items-center gap-4 md:gap-6">
                <div class="hidden md:flex items-center gap-4">
                    <NuxtLink
                        to="https://www.facebook.com/siegersportbar"
                        target="_blank"
                        class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                    >
                        <img
                            src="/ikonok/facebook_ikon_feher.png"
                            alt="Facebook"
                            class="w-5 h-5 object-contain"
                        />
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.instagram.com/siegersportbar/"
                        target="_blank"
                        class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                    >
                        <img
                            src="/ikonok/instagram_ikon_feher.png"
                            alt="Instagram"
                            class="w-5 h-5 object-contain"
                        />
                    </NuxtLink>
                </div>
                <div class="h-6 w-px bg-muted hidden md:block" />
                <LangSwitcher />

                <!-- Mobile Menu Toggle -->
                <UButton
                    color="neutral"
                    variant="ghost"
                    :icon="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
                    class="xl:hidden"
                    @click="isMenuOpen = !isMenuOpen"
                />
            </div>
        </UContainer>

        <!-- Mobile Menu Overlay -->
        <div
            v-if="isMenuOpen"
            class="fixed inset-0 top-20 bg-default/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 xl:hidden transition-all duration-300 min-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] overflow-y-auto"
        >
            <nav class="flex flex-col items-center gap-8 font-medium text-lg tracking-widest uppercase py-8">
                <NuxtLink
                    :to="localePath('/')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.start') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#about')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.about') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#specials')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.specials') }}</NuxtLink
                >
                <div class="flex flex-col items-center gap-4">
                    <button
                        @click="isOffersOpen = !isOffersOpen"
                        class="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest"
                    >
                        {{ $t('nav.food_menu') }}
                        <UIcon
                            name="i-lucide-chevron-down"
                            class="w-5 h-5 transition-transform"
                            :class="{ 'rotate-180': isOffersOpen }"
                        />
                    </button>
                    <div
                        v-if="isOffersOpen"
                        class="flex flex-col items-center gap-4 text-base"
                    >
                        <NuxtLink
                            :to="localePath('/etlap')"
                            @click="isMenuOpen = false"
                            class="hover:text-primary transition-colors"
                            >{{ $t('nav.offers.food_menu') }}</NuxtLink
                        >
                        <NuxtLink
                            :to="localePath('/kezdo-11')"
                            @click="isMenuOpen = false"
                            class="hover:text-primary transition-colors"
                            >{{ $t('nav.offers.starting11') }}</NuxtLink
                        >
                        <NuxtLink
                            :to="localePath('/deli-felido')"
                            @click="isMenuOpen = false"
                            class="hover:text-primary transition-colors"
                            >{{ $t('nav.offers.deli') }}</NuxtLink
                        >
                        <NuxtLink
                            :to="localePath('/#specials')"
                            @click="isMenuOpen = false"
                            class="hover:text-primary transition-colors"
                            >{{ $t('nav.offers.chef') }}</NuxtLink
                        >
                    </div>
                </div>
                <NuxtLink
                    :to="localePath('/itallap')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.drinks_menu') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/esemenyek')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.events') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#gallery')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.gallery') }}</NuxtLink
                >
                <!-- Kiemelt asztalfoglalás gomb -->
                <UButton
                    color="primary"
                    variant="solid"
                    size="xl"
                    class="uppercase tracking-widest font-bold"
                    @click="
                        isMenuOpen = false;
                        isBookingOpen = true;
                    "
                >
                    {{ $t('buttons.book_table') }}
                </UButton>
            </nav>
            <div class="flex items-center gap-6 pb-8">
                <NuxtLink
                    to="https://www.facebook.com/siegersportbar"
                    target="_blank"
                    class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                >
                    <img
                        src="/ikonok/facebook_ikon_feher.png"
                        alt="Facebook"
                        class="w-8 h-8 object-contain"
                    />
                </NuxtLink>
                <NuxtLink
                    to="https://www.instagram.com/siegersportbar/"
                    target="_blank"
                    class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                >
                    <img
                        src="/ikonok/instagram_ikon_feher.png"
                        alt="Instagram"
                        class="w-8 h-8 object-contain"
                    />
                </NuxtLink>
            </div>
        </div>

        <BookingModal v-model:open="isBookingOpen" />
    </header>
</template>

<script setup>
const localePath = useLocalePath();
const { t } = useI18n();
const isMenuOpen = ref(false);
const isOffersOpen = ref(false);
const isBookingOpen = ref(false);

const offerItems = computed(() => [
    { label: t('nav.offers.food_menu'), to: localePath('/etlap') },
    { label: t('nav.offers.starting11'), to: localePath('/kezdo-11') },
    { label: t('nav.offers.deli'), to: localePath('/deli-felido') },
    { label: t('nav.offers.chef'), to: localePath('/#specials') },
]);

// Close menu when route changes
const route = useRoute();
watch(
    () => route.fullPath,
    () => {
        isMenuOpen.value = false;
        isOffersOpen.value = false;
    },
);
</script>

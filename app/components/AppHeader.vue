<template>
    <header class="fixed top-0 w-full z-50 bg-default/90 backdrop-blur-md border-b border-default text-default">
        <UContainer class="flex items-center justify-between h-20">
            <!-- Logo -->
            <NuxtLink
                to="/"
                class="flex-shrink-0"
            >
                <img
                    src="/media/logos/sieger_feher_logo.png"
                    alt="Sieger Logo"
                    class="h-12 w-auto invert dark:invert-0"
                />
            </NuxtLink>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8 font-medium text-sm tracking-widest uppercase">
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
                <NuxtLink
                    :to="localePath('/etlap')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.food_menu') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#gallery')"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.gallery') }}</NuxtLink
                >
            </nav>

            <!-- Right Actions (Lang + Social + Theme) -->
            <div class="flex items-center gap-4 md:gap-6">
                <div class="hidden md:flex items-center gap-4">
                    <NuxtLink
                        to="https://www.facebook.com/siegersportbar"
                        target="_blank"
                        class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                    >
                        <UIcon
                            name="i-lucide-facebook"
                            class="w-5 h-5"
                        />
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.instagram.com/siegersportbar/"
                        target="_blank"
                        class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                    >
                        <UIcon
                            name="i-lucide-instagram"
                            class="w-5 h-5"
                        />
                    </NuxtLink>
                </div>
                <div class="h-6 w-px bg-muted hidden md:block" />
                <LangSwitcher />
                <UColorModeButton
                    color="neutral"
                    variant="ghost"
                />

                <!-- Mobile Menu Toggle -->
                <UButton
                    color="neutral"
                    variant="ghost"
                    :icon="isMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
                    class="md:hidden"
                    @click="isMenuOpen = !isMenuOpen"
                />
            </div>
        </UContainer>

        <!-- Mobile Menu Overlay -->
        <div
            v-if="isMenuOpen"
            class="fixed inset-0 top-20 bg-default/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 min-h-[calc(100vh-5rem)] h-[calc(100vh-5rem)] overflow-y-auto"
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
                <NuxtLink
                    :to="localePath('/etlap')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.food_menu') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/#gallery')"
                    @click="isMenuOpen = false"
                    class="hover:text-primary transition-colors"
                    >{{ $t('nav.gallery') }}</NuxtLink
                >
            </nav>
            <div class="flex items-center gap-6 pb-8">
                <NuxtLink
                    to="https://www.facebook.com/siegersportbar"
                    target="_blank"
                    class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                >
                    <UIcon
                        name="i-lucide-facebook"
                        class="w-8 h-8"
                    />
                </NuxtLink>
                <NuxtLink
                    to="https://www.instagram.com/siegersportbar/"
                    target="_blank"
                    class="text-muted hover:text-primary transition-all duration-300 transform hover:scale-110"
                >
                    <UIcon
                        name="i-lucide-instagram"
                        class="w-8 h-8"
                    />
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup>
const localePath = useLocalePath();
const isMenuOpen = ref(false);

// Close menu when route changes
const route = useRoute();
watch(
    () => route.fullPath,
    () => {
        isMenuOpen.value = false;
    },
);
</script>

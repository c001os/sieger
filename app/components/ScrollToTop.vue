<template>
    <button
        v-show="visible"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-inverted shadow-lg hover:bg-primary/90 transition-all duration-300"
        aria-label="Ugrás az oldal tetejére"
    >
        <UIcon name="i-lucide-chevron-up" class="w-6 h-6" />
    </button>
</template>

<script setup>
const visible = ref(false);

const checkScroll = () => {
    visible.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

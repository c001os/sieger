<script setup>
const { locale } = useI18n();

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    reverse: {
        type: Boolean,
        default: false,
    },
    delay: {
        type: Number,
        default: 0,
    },
});

const isHovered = ref(false);
const autoShowFood = ref(false);
const isVisible = ref(false);

let timer = null;

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 80 + props.delay);

    if (window.matchMedia('(hover: none)').matches) {
        timer = setInterval(() => {
            autoShowFood.value = !autoShowFood.value;
        }, 3500);
    }
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});

const showFood = computed(() => isHovered.value || autoShowFood.value);
</script>

<template>
    <div
        class="group transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div
            class="flex items-center gap-2 md:gap-4 bg-elevated/90 backdrop-blur-md border border-default/60 rounded-full pl-1.5 pr-4 py-1.5 md:pl-2 md:pr-5 md:py-2 shadow-2xl transition-all duration-300 group-hover:border-primary group-hover:scale-105"
            :class="reverse ? 'flex-row-reverse pl-4 pr-1.5 md:pl-5 md:pr-2' : ''"
        >
            <div
                class="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0 bg-white"
            >
                <img
                    :src="item.logo"
                    :alt="item.name.hu"
                    class="absolute inset-0 w-full h-full object-contain p-1 transition-opacity duration-500"
                    :class="showFood ? 'opacity-0' : 'opacity-100'"
                />
                <img
                    :src="item.foodImage"
                    :alt="item.name.hu"
                    class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    :class="showFood ? 'opacity-100' : 'opacity-0'"
                />
            </div>

            <div class="min-w-0">
                <div
                    class="text-[11px] md:text-sm font-bold uppercase text-default truncate max-w-[140px] md:max-w-[200px] leading-tight"
                >
                    {{ item.name[locale] || item.name.hu }}
                </div>
                <div class="text-[11px] md:text-base font-black text-primary">
                    {{ item.price }}
                </div>
            </div>
        </div>

        <!-- Desktop hover description -->
        <div
            class="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-elevated/95 backdrop-blur border border-primary/50 p-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50"
        >
            <p class="text-xs text-muted leading-relaxed">
                {{ item.description[locale] || item.description.hu }}
            </p>
        </div>
    </div>
</template>

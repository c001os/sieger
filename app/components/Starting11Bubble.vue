<script setup>
const { locale } = useI18n();

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    delay: {
        type: Number,
        default: 0,
    },
    // A hover információs kártya iránya: 'bottom' (alap) vagy 'top' (alsó soroknál)
    tooltip: {
        type: String,
        default: 'bottom',
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
        class="group transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:z-50"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div class="flex items-center gap-3 md:block">
            <!-- Kör buborék: alap nézetben csapatlogó, hoverre ételfotó -->
            <!-- Desktopon a szülő (pálya pozíció / csere rács cella) adja a szélességet, a buborék kitölti -->
            <div
                class="relative w-16 h-16 md:w-full md:h-auto md:aspect-square rounded-full overflow-hidden border-2 border-white/80 bg-white shadow-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary"
            >
                <img
                    :src="item.logo"
                    :alt="item.name[locale] || item.name.hu"
                    class="absolute inset-0 w-full h-full object-contain p-1.5 md:p-2 transition-opacity duration-500"
                    :class="showFood ? 'opacity-0' : 'opacity-100'"
                />
                <img
                    :src="item.foodImage"
                    :alt="item.name[locale] || item.name.hu"
                    class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    :class="showFood ? 'opacity-100' : 'opacity-0'"
                />
            </div>

            <!-- Mobil: név és ár a kör mellett -->
            <div class="md:hidden min-w-0 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <div class="text-[11px] font-bold uppercase text-white truncate leading-tight">
                    {{ item.name[locale] || item.name.hu }}
                </div>
                <div class="text-[11px] font-black text-primary">
                    {{ item.price }}
                </div>
            </div>
        </div>

        <!-- Desktop hover kártya: ételnév + leírás + ár, tömör háttérrel -->
        <div
            class="hidden md:block absolute left-1/2 -translate-x-1/2 w-56 text-center pointer-events-none z-50 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-[#0B1E33]/95 border border-white/15 rounded-xl px-3 py-2.5 shadow-2xl"
            :class="tooltip === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'"
        >
            <div class="text-[11px] font-bold uppercase tracking-wider text-white">
                {{ item.name[locale] || item.name.hu }}
            </div>
            <p class="mt-1.5 text-xs text-white/75 leading-relaxed">
                {{ item.description[locale] || item.description.hu }}
            </p>
            <div class="mt-1.5 text-sm font-black text-brand-300">
                {{ item.price }}
            </div>
        </div>
    </div>
</template>

<script setup>
const { locale } = useI18n();

defineProps({
    title: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
});

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}
</script>

<template>
    <div>
        <h3 class="text-xl font-bold text-primary uppercase tracking-widest mb-6 pb-4 border-b border-default">
            {{ title }}
        </h3>

        <ul class="space-y-4">
            <li
                v-for="(item, index) in items"
                :key="index"
                class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2"
            >
                <span class="text-default font-medium leading-snug">
                    {{ text(item) }}
                </span>
                <div class="flex flex-col gap-1 text-primary font-semibold whitespace-nowrap md:text-right">
                    <span
                        v-for="(price, pIndex) in item.prices"
                        :key="pIndex"
                    >
                        {{ price }}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

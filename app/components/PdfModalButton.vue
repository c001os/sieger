<script setup>
defineProps({
    file: { type: String, required: true },
    title: { type: String, default: 'PDF megtekintése' },
    buttonLabel: { type: String, default: 'Megtekintés' },
});

const isOpen = ref(false);
</script>

<template>
    <UModal
        v-model:open="isOpen"
        :title="title"
        fullscreen
    >
        <UButton
            color="primary"
            variant="outline"
            size="lg"
            icon="i-lucide-eye"
            class="uppercase tracking-widest justify-center"
        >
            {{ buttonLabel }}
        </UButton>

        <template #body>
            <iframe
                :src="file"
                class="w-full h-[80vh] rounded-lg"
                :title="title"
            />
        </template>

        <template #footer>
            <UButton
                :to="file"
                download
                color="primary"
                variant="solid"
                size="lg"
                icon="i-lucide-download"
                class="uppercase tracking-widest"
            >
                Letöltés
            </UButton>
        </template>
    </UModal>
</template>

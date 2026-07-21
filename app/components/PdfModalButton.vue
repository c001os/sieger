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
            <div class="flex flex-col gap-3">
                <iframe
                    :src="file"
                    class="w-full h-[75vh] rounded-lg bg-white"
                    :title="title"
                />
                <!-- Mobilon több böngésző nem tud PDF-et iframe-ben megjeleníteni -->
                <p class="text-sm text-muted text-center">
                    Ha az előnézet nem jelenik meg,
                    <a
                        :href="file"
                        target="_blank"
                        rel="noopener"
                        class="text-primary font-bold underline"
                        >nyisd meg új lapon</a
                    >, vagy töltsd le a PDF-et.
                </p>
            </div>
        </template>

        <template #footer>
            <UButton
                :to="file"
                external
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

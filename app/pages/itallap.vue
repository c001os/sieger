<script setup>
useHead({
    title: 'Itallap – Sieger Sport Bár',
    meta: [
        {
            name: 'description',
            content:
                'Böngéssz aktuális itallapunkban, vagy töltsd le PDF formátumban.',
        },
    ],
});

const drinkMenu = {
    title: 'Itallap',
    description: 'Aktuális italválasztékunk PDF formátumban.',
    file: '/documents/sieger_itallap_2026_weboldalra.pdf',
};
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">Itallap</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    Böngéssz aktuális itallapunkban, vagy töltsd le PDF formátumban.
                </p>
            </UContainer>
        </section>

        <!-- Download -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-2xl mx-auto">
                    <div
                        class="bg-elevated border border-default rounded-lg p-8 md:p-10 flex flex-col items-center text-center gap-6"
                    >
                        <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <UIcon
                                name="i-lucide-file-text"
                                class="w-10 h-10 text-primary"
                            />
                        </div>

                        <div>
                            <h2 class="text-2xl font-bold text-default mb-2">{{ drinkMenu.title }}</h2>
                            <p class="text-sm text-muted">{{ drinkMenu.description }}</p>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <PdfModalButton
                                :file="drinkMenu.file"
                                title="Itallap"
                                button-label="Megtekintés"
                            />
                            <UButton
                                :to="drinkMenu.file"
                                external
                                download
                                color="primary"
                                variant="solid"
                                size="lg"
                                icon="i-lucide-download"
                                class="uppercase tracking-widest justify-center w-full sm:w-auto"
                            >
                                Letöltés
                            </UButton>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>

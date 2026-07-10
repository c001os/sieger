<script setup>
useHead({
    title: 'Déli félidő – Sieger Sport Bár',
    meta: [
        {
            name: 'description',
            content:
                'Tekintsd meg aktuális heti menü ajánlatunkat, vagy töltsd le PDF formátumban.',
        },
    ],
});

const pdfFile = '/documents/sieger_deli_felido_01_19.pdf';
</script>

<template>
    <div>
        <!-- Hero -->
        <section class="relative py-32 bg-default border-b border-default">
            <UContainer class="text-center">
                <h1 class="text-4xl md:text-6xl font-black text-default tracking-wider mb-4">Déli félidő</h1>
                <p class="text-muted text-lg max-w-2xl mx-auto">
                    Aktuális heti menü ajánlatunk. Böngéssz böngészőben, vagy töltsd le PDF formátumban.
                </p>
            </UContainer>
        </section>

        <!-- PDF viewer -->
        <section class="py-24 bg-muted">
            <UContainer>
                <div class="max-w-5xl mx-auto space-y-8 text-center">
                    <h2 class="text-2xl font-bold text-default">Heti menü</h2>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <PdfModalButton
                            :file="pdfFile"
                            title="Déli félidő"
                            button-label="Megtekintés"
                        />
                        <UButton
                            :to="pdfFile"
                            download
                            color="primary"
                            variant="solid"
                            size="lg"
                            icon="i-lucide-download"
                            class="uppercase tracking-widest justify-center"
                        >
                            Letöltés
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </section>
    </div>
</template>

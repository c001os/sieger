<script setup>
const isOpen = defineModel('open', { default: false });
</script>

<template>
    <UModal
        v-model:open="isOpen"
        title="Asztalfoglalás"
        description="Válassz egy lehetőséget az asztalfoglaláshoz."
    >
        <template #body>
            <div class="flex flex-col gap-3">
                <UButton
                    to="tel:+36206156491"
                    color="primary"
                    variant="solid"
                    size="lg"
                    icon="i-lucide-phone"
                    class="w-full justify-center"
                >
                    +36 20 615 6491
                </UButton>

                <UButton
                    to="https://reservation.dish.co/landingPage/hydra-04c836b0-5289-11ec-9d2e-e75e4316d3d2"
                    target="_blank"
                    color="neutral"
                    variant="outline"
                    size="lg"
                    icon="i-lucide-calendar-check"
                    class="w-full justify-center"
                >
                    Online asztalfoglalás
                </UButton>
            </div>
        </template>
    </UModal>
</template>

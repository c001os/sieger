<script setup>
const isOpen = defineModel('open', { default: false });

const columns = [
    {
        key: 'restaurant',
        image: '/media/interior/belter.webp',
    },
    {
        key: 'vip',
        image: '/media/interior/vip.webp',
    },
    {
        key: 'terrace',
        image: '/media/interior/terasz.webp',
    },
];
</script>

<template>
    <UModal
        v-model:open="isOpen"
        :title="$t('booking.title')"
        :description="$t('booking.description')"
        :ui="{ content: 'sm:max-w-4xl' }"
    >
        <template #body>
            <div class="flex flex-col gap-6">
                <!-- Helyszínek: Étterem / VIP terem / Terasz -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        v-for="column in columns"
                        :key="column.key"
                        class="flex flex-col gap-3"
                    >
                        <div class="aspect-[3/2] overflow-hidden rounded-lg">
                            <img
                                :src="column.image"
                                :alt="$t(`booking.columns.${column.key}.title`)"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <h3 class="text-lg font-bold text-default uppercase tracking-wider">
                            {{ $t(`booking.columns.${column.key}.title`) }}
                        </h3>
                        <p class="text-sm text-muted leading-relaxed">
                            {{ $t(`booking.columns.${column.key}.text`) }}
                        </p>
                    </div>
                </div>

                <!-- Foglalási opciók -->
                <div class="flex flex-col sm:flex-row gap-3">
                    <UButton
                        to="tel:+36206156491"
                        color="primary"
                        variant="solid"
                        size="lg"
                        class="flex-1 justify-center"
                    >
                        <template #leading>
                            <img
                                src="/ikonok/telefon_ikon_feher.png"
                                :alt="$t('footer.phone')"
                                class="w-5 h-5 object-contain"
                            />
                        </template>
                        +36 20 615 6491
                    </UButton>

                    <UButton
                        to="https://reservation.dish.co/landingPage/hydra-04c836b0-5289-11ec-9d2e-e75e4316d3d2"
                        target="_blank"
                        color="neutral"
                        variant="outline"
                        size="lg"
                        icon="i-lucide-calendar-check"
                        class="flex-1 justify-center"
                    >
                        {{ $t('booking.online') }}
                    </UButton>
                </div>
            </div>
        </template>
    </UModal>
</template>

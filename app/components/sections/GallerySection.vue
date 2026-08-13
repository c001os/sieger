<script setup>
const { data: galleryImages } = await useFetch('/api/gallery');

function getVisibilityClass(index) {
    // Match the original 12-image responsive layout:
    // indices 0-3, 6-7 always visible
    // indices 4, 8, 9 visible from md breakpoint
    // indices 5, 10, 11 visible from lg breakpoint
    if ([4, 8, 9].includes(index)) return 'hidden md:block';
    if ([5, 10, 11].includes(index)) return 'hidden lg:block';
    return '';
}
</script>

<template>
    <section class="bg-default py-4">
        <!-- Image Gallery above Footer -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 px-1">
            <div
                v-for="(item, index) in galleryImages"
                :key="item.id"
                class="overflow-hidden group relative aspect-square"
                :class="getVisibilityClass(index)"
            >
                <img
                    :src="item.url"
                    :alt="$t('sections.gallery.image_alt')"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
            </div>
        </div>
    </section>
</template>

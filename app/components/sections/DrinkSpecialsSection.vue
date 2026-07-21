<template>
    <section class="bg-muted border-t border-default">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <!-- Text Block -->
            <div
                class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-b border-default"
            >
                <h2 class="text-3xl font-black text-default uppercase tracking-wider mb-4">
                    {{ $t('sections.drink_specials.title_top') }}<br /><span class="text-primary">{{ $t('sections.drink_specials.title_bottom') }}</span>
                </h2>
                <div class="w-12 h-1 bg-primary mb-6"></div>
                <p class="text-muted">{{ $t('sections.drink_specials.lead') }}</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-b border-default overflow-hidden group">
                <img
                    src="/media/drinks/specials/img_5298.webp"
                    :alt="$t('sections.drink_specials.image_alt', { n: 1 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div
                class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-b border-default hidden lg:flex"
            >
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-2">{{ $t('sections.drink_specials.cocktails_top') }}<br />{{ $t('sections.drink_specials.cocktails_bottom') }}</h3>
                <p class="text-sm text-muted">{{ $t('sections.drink_specials.cocktails_desc') }}</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-b border-default overflow-hidden group">
                <img
                    src="/media/drinks/specials/img_5349.webp"
                    :alt="$t('sections.drink_specials.image_alt', { n: 2 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-default overflow-hidden group hidden lg:block">
                <img
                    src="/media/drinks/specials/img_5385.webp"
                    :alt="$t('sections.drink_specials.image_alt', { n: 3 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-default">
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-2">{{ $t('sections.drink_specials.spirits_top') }}<br />{{ $t('sections.drink_specials.spirits_bottom') }}</h3>
                <p class="text-sm text-muted">{{ $t('sections.drink_specials.spirits_desc') }}</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-default overflow-hidden group">
                <img
                    src="/media/drinks/specials/img_5400.webp"
                    :alt="$t('sections.drink_specials.image_alt', { n: 4 })"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated">
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-4">{{ $t('sections.drink_specials.more_title') }}</h3>
                <UButton
                    to="#menu"
                    color="primary"
                    variant="ghost"
                    class="uppercase tracking-widest font-bold px-0 hover:bg-transparent hover:text-inverted"
                >
                    {{ $t('nav.drinks_menu') }}
                    <UIcon
                        name="i-lucide-arrow-right"
                        class="ml-2 w-4 h-4"
                    />
                </UButton>
            </div>
        </div>
    </section>
</template>

<template>
    <section class="bg-muted border-t border-default">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <!-- Text Block -->
            <div
                class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-b border-default"
            >
                <h2 class="text-3xl font-black text-default uppercase tracking-wider mb-4">
                    Ital<br /><span class="text-primary">Specialitások</span>
                </h2>
                <div class="w-12 h-1 bg-primary mb-6"></div>
                <p class="text-muted">Signature italok egyenesen a pultból, kizárólag a Sieger kínálatában.</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-b border-default overflow-hidden group">
                <img
                    src="/media/drinks/specials/img_5298.webp"
                    alt="Special 1"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div
                class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-b border-default hidden lg:flex"
            >
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-2">Frissítő<br />Koktélok</h3>
                <p class="text-sm text-muted">Tökéletes választás a meccsek mellé.</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-b border-default overflow-hidden group">
                <img
                    src="/media/drinks/specials/img_5349.webp"
                    alt="Special 2"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-default overflow-hidden group hidden lg:block">
                <img
                    src="/media/drinks/specials/img_5385.webp"
                    alt="Special 3"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated border-r border-default">
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-2">Prémium<br />Párlatok</h3>
                <p class="text-sm text-muted">Kiváló minőségű röviditalok széles választéka.</p>
            </div>

            <!-- Image -->
            <div class="aspect-square border-r border-default overflow-hidden group">
                <img
                    src="/media/drinks/specials/img_5400.webp"
                    alt="Special 4"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
            </div>

            <!-- Text Block -->
            <div class="p-12 md:p-16 flex flex-col justify-center items-start bg-elevated">
                <h3 class="text-xl font-bold text-default uppercase tracking-wider mb-4">További italok</h3>
                <UButton
                    to="#menu"
                    color="primary"
                    variant="ghost"
                    class="uppercase tracking-widest font-bold px-0 hover:bg-transparent hover:text-inverted"
                >
                    Itallap
                    <UIcon
                        name="i-lucide-arrow-right"
                        class="ml-2 w-4 h-4"
                    />
                </UButton>
            </div>
        </div>
    </section>
</template>

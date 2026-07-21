<template>
    <section class="bg-default border-t border-default">
        <!-- Sötét, „Sieger kék" színvilágú térkép stílus (Google embed CSS-szűrő) -->
        <div class="w-full h-[400px] md:h-[500px] bg-[#0B1E33]">
            <iframe
                src="https://www.google.com/maps?q=9026+Gy%C5%91r%2C+Egyetem+t%C3%A9r+1.&output=embed"
                width="100%"
                height="100%"
                style="border: 0; filter: grayscale(1) invert(0.9) sepia(0.45) hue-rotate(190deg) saturate(2.4) brightness(0.92) contrast(1.05)"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                :title="$t('sections.map.title')"
            ></iframe>
        </div>
    </section>
</template>

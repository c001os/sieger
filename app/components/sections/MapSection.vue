<template>
    <section class="bg-default border-t border-default">
        <!-- „Sieger kék" színvilágú térkép stílus (Google embed CSS-szűrő) -->
        <div class="w-full h-[400px] md:h-[500px]">
            <iframe
                src="https://www.google.com/maps?q=9026+Gy%C5%91r%2C+Egyetem+t%C3%A9r+1.&output=embed"
                width="100%"
                height="100%"
                style="border: 0; filter: grayscale(1) sepia(0.55) hue-rotate(195deg) saturate(2.8)"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Sieger Sport Bár térképe"
            ></iframe>
        </div>
    </section>
</template>

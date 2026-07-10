<script setup>
const { locale } = useI18n();

function text(obj) {
    return obj?.[locale.value] || obj?.hu || '';
}

const foodImages = {
    img25: '/media/starting11/sze_sieger_etlap_2025_11_04_adorjan_andras_25.webp',
    img27: '/media/starting11/sze_sieger_etlap_2025_11_04_adorjan_andras_27.webp',
    img30: '/media/starting11/sze_sieger_etlap_2025_11_04_adorjan_andras_30.webp',
    img31: '/media/starting11/sze_sieger_etlap_2025_11_04_adorjan_andras_31.webp',
    img32: '/media/starting11/sze_sieger_etlap_2025_11_04_adorjan_andras_32.webp',
    img43: '/media/starting11/sze_sieger_etlap_2025_11_04_adorjan_andras_43.webp',
    malacos: '/media/starting11/malacos_krumpli.webp',
};

const teamLogos = {
    l60: '/media/teams/eszkoz_60.webp',
    l70: '/media/teams/eszkoz_70.webp',
    l80: '/media/teams/eszkoz_80.webp',
    l90: '/media/teams/eszkoz_90.webp',
    l100: '/media/teams/eszkoz_100.webp',
    l110: '/media/teams/eszkoz_110.webp',
    l120: '/media/teams/eszkoz_120.webp',
    l130: '/media/teams/eszkoz_130.webp',
    l140: '/media/teams/eszkoz_140.webp',
    l150: '/media/teams/eszkoz_150.webp',
    l160: '/media/teams/eszkoz_160.webp',
    l170: '/media/teams/eszkoz_170.webp',
    l180: '/media/teams/eszkoz_180.webp',
    l190: '/media/teams/eszkoz_190.webp',
    l200: '/media/teams/eszkoz_200.webp',
};

const starters = [
    {
        name: { hu: 'Húsleves', en: 'Beef Broth', de: 'Rinderbrühe' },
        description: {
            hu: 'Tradicionális marhahúsleves velős csonttal.',
            en: 'Traditional beef broth with marrow bone.',
            de: 'Traditionelle Rinderbrühe mit Markknochen.',
        },
        price: '2 490 Ft',
        logo: teamLogos.l60,
        foodImage: foodImages.img25,
        position: { top: '8%', left: '50%' },
    },
    {
        name: { hu: 'Kamra ízelítő', en: 'Pantry Platter', de: 'Vorspeisenplatte' },
        description: {
            hu: 'Tepertőkrém, kolbász, sonka, sajt.',
            en: 'Pork crackling spread, sausage, ham, cheese.',
            de: 'Griebenaufstrich, Wurst, Schinken, Käse.',
        },
        price: '3 490 Ft',
        logo: teamLogos.l70,
        foodImage: foodImages.img27,
        position: { top: '22%', left: '20%' },
    },
    {
        name: { hu: 'Tatár beef steak', en: 'Beef Tartare', de: 'Beef Tatar' },
        description: {
            hu: 'Frissen készült tatár beef steak.',
            en: 'Freshly made beef tartare.',
            de: 'Frisch zubereitetes Beef Tatar.',
        },
        price: '5 790 Ft',
        logo: teamLogos.l80,
        foodImage: foodImages.img30,
        position: { top: '22%', left: '80%' },
    },
    {
        name: { hu: 'Sieger burger', en: 'Sieger Burger', de: 'Sieger Burger' },
        description: {
            hu: 'Házi kovászos buci, marhahús pogácsa, kecskesajt, lilahagymalekvár, coleslaw.',
            en: 'Homemade sourdough bun, beef patty, goat cheese, red onion jam, coleslaw.',
            de: 'Hausgemachter Sauerteig-Bun, Rind Patty, Ziegenkäse, rote Zwiebelmarmelade, Coleslaw.',
        },
        price: '4 990 Ft',
        logo: teamLogos.l90,
        foodImage: foodImages.img31,
        position: { top: '36%', left: '15%' },
    },
    {
        name: { hu: 'BBQ spare ribs', en: 'BBQ Spare Ribs', de: 'BBQ Spareribs' },
        description: {
            hu: 'BBQ spare ribs burgonya chips-szel.',
            en: 'BBQ spare ribs with potato chips.',
            de: 'BBQ Spareribs mit Kartoffelchips.',
        },
        price: '5 990 Ft',
        logo: teamLogos.l100,
        foodImage: foodImages.img32,
        position: { top: '36%', left: '50%' },
    },
    {
        name: { hu: 'Kacsacomb', en: 'Duck Leg', de: 'Entenkeule' },
        description: {
            hu: 'Kacsacomb sült káposztás cvekedlivel.',
            en: 'Duck leg with fried cabbage noodles.',
            de: 'Entenkeule mit Krautnudeln.',
        },
        price: '5 490 Ft',
        logo: teamLogos.l110,
        foodImage: foodImages.img43,
        position: { top: '36%', left: '85%' },
    },
    {
        name: { hu: 'BBQ csirkeszárnyak', en: 'BBQ Chicken Wings', de: 'BBQ Chicken Wings' },
        description: {
            hu: 'Burgonya chips, sweet chili & BBQ mártogató.',
            en: 'Potato chips with sweet chili & BBQ dips.',
            de: 'Kartoffelchips mit Sweet-Chili- und BBQ-Dip.',
        },
        price: '4 190 Ft',
        logo: teamLogos.l120,
        foodImage: foodImages.malacos,
        position: { top: '52%', left: '12%' },
    },
    {
        name: { hu: 'Pulled pork szendvics', en: 'Pulled Pork Sandwich', de: 'Pulled-Pork-Sandwich' },
        description: {
            hu: 'Pulled pork szendvics burgonya chips-szel.',
            en: 'Pulled pork sandwich with potato chips.',
            de: 'Pulled-Pork-Sandwich mit Kartoffelchips.',
        },
        price: '4 490 Ft',
        logo: teamLogos.l130,
        foodImage: foodImages.img25,
        position: { top: '52%', left: '38%' },
    },
    {
        name: { hu: 'Mézes-chilis lazac', en: 'Honey-Chili Salmon', de: 'Honig-Chili-Lachs' },
        description: {
            hu: 'Mézes-chilis lazac steak sült zöldséges üvegtésztával.',
            en: 'Honey-chili salmon steak with stir-fried glass noodles and vegetables.',
            de: 'Lachssteak mit Honig-Chili-Glasur, gebratene Glasnudeln mit Gemüse.',
        },
        price: '4 990 Ft',
        logo: teamLogos.l140,
        foodImage: foodImages.img27,
        position: { top: '52%', left: '62%' },
    },
    {
        name: { hu: 'Chilis bab + nachos', en: 'Chili con Carne', de: 'Chili con Carne' },
        description: {
            hu: 'Chilis bab nachos-szal.',
            en: 'Chili con carne with nachos.',
            de: 'Chili con Carne mit Nachos.',
        },
        price: '3 990 Ft',
        logo: teamLogos.l150,
        foodImage: foodImages.img30,
        position: { top: '52%', left: '88%' },
    },
    {
        name: { hu: '„Malacos krumpli”', en: 'Sieger Pulled Pork Potatoes', de: 'Sieger Spanferkel-Kartoffeln' },
        description: {
            hu: 'Hasábburgonya, pulled pork, cheddar sajt, jalapeno.',
            en: 'French fries, pulled pork, cheddar cheese, jalapeno.',
            de: 'Pommes Frites, Pulled Pork, Cheddar-Käse, Jalapeno.',
        },
        price: '4 490 Ft',
        logo: teamLogos.l160,
        foodImage: foodImages.malacos,
        position: { top: '76%', left: '50%' },
    },
];

const substitutes = [
    {
        name: { hu: 'Cézár saláta', en: 'Caesar Salad', de: 'Caesar Salat' },
        description: {
            hu: 'Csirkével, tigrisrák +600 Ft.',
            en: 'With chicken, tiger prawns available +600 HUF.',
            de: 'Mit Hähnchen, auf Wunsch mit Riesengarnelen +600 HUF.',
        },
        price: '3 990 Ft',
        logo: teamLogos.l170,
        foodImage: foodImages.img31,
    },
    {
        name: { hu: 'Császármorzsa', en: 'Vienna Crumbs', de: 'Kaiserschmarrn' },
        description: {
            hu: 'Klasszikus császármorzsa.',
            en: 'Classic Vienna crumbs.',
            de: 'Klassischer Kaiserschmarrn.',
        },
        price: '3 490 Ft',
        logo: teamLogos.l180,
        foodImage: foodImages.img32,
    },
    {
        name: { hu: 'Bajor perecek', en: 'Bavarian Pretzels', de: 'Bayerische Brezeln' },
        description: {
            hu: 'Cheddar sajtos, édes-mustáros szósszal.',
            en: 'With cheddar cheese and sweet mustard sauce.',
            de: 'Mit Cheddar-Käse und süßem Senf.',
        },
        price: '2 590 Ft',
        logo: teamLogos.l190,
        foodImage: foodImages.img43,
    },
    {
        name: { hu: 'Rántottcsirke variáció', en: 'Breaded Fried Chicken', de: 'Paniertes Hähnchen' },
        description: {
            hu: 'Rántottcsirke variáció hasábburgonyával.',
            en: 'Breaded fried chicken selection with french fries.',
            de: 'Panierte Hähnchenauswahl mit Pommes frites.',
        },
        price: '4 490 Ft',
        logo: teamLogos.l200,
        foodImage: foodImages.img25,
    },
];

const allergens = [
    { code: '1', hu: 'Glutént tartalmazó gabonafélék (Gluten)', en: 'Gluten', de: 'Gluten' },
    { code: '2', hu: 'Rákfélék és a belőlük készült termékek (Crustaceans)', en: 'Crustaceans', de: 'Krebstiere' },
    { code: '3', hu: 'Tojás és a belőle készült termékek (Egg)', en: 'Egg', de: 'Eier' },
    { code: '4', hu: 'Hal és a belőle készült termékek (Fish)', en: 'Fish', de: 'Fisch' },
    { code: '5', hu: 'Földimogyoró és a belőle készült termékek (Peanuts)', en: 'Peanuts', de: 'Erdnüsse' },
    { code: '6', hu: 'Szójabab és a belőle készült termékek (Soya)', en: 'Soya', de: 'Sojabohnen' },
    { code: '7', hu: 'Tej és az abból készült termékek (Milk)', en: 'Milk', de: 'Milch' },
    { code: '8', hu: 'Diófélék, azaz mandula, mogyoró, dió, kesudió, brazil dió, pisztácia, makadámia vagy queenslandi dió és a belőle készült termékek (Nuts)', en: 'Nuts', de: 'Schalenfrüchte' },
    { code: '9', hu: 'Zeller és a belőle készült termékek (Celery)', en: 'Celery', de: 'Sellerie' },
    { code: '10', hu: 'Mustár és a belőle készült termékek (Mustard)', en: 'Mustard', de: 'Senf' },
    { code: '11', hu: 'Szezámmag és a belőle készült termékek (Sesame)', en: 'Sesame', de: 'Sesamsamen' },
    { code: '12', hu: 'Kén-dioxid és az SO2-ben kifejezett szulfitok 10 mg / kg, illetve 10 mg/ liter összekoncentrációt meghaladó mennyiségben (Sulphite)', en: 'Sulphite', de: 'Schwefeldioxid' },
    { code: '13', hu: 'Csillagfürt és a belőle készült termékek (Lupin)', en: 'Lupin', de: 'Lupine' },
    { code: '14', hu: 'Puhatestűek és a belőlük készült termékek (Molluscs)', en: 'Molluscs', de: 'Weichtiere' },
];
</script>

<template>
    <section class="py-24 bg-default border-t border-default relative overflow-hidden">
        <UContainer class="relative z-10">
            <!-- Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-black text-default uppercase tracking-wider mb-4">
                    Kezdő 11-es ajánlatunk
                </h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-muted max-w-2xl mx-auto">
                    Válogass a bajnokoknak kijáró fogások közül! Kézműves burgerek és különlegességek, egyedi
                    felállásban. Húzd az egeret a csapatlogók fölé, és nézd meg, melyik étellel játszanak!
                </p>
            </div>

            <!-- Desktop pitch layout -->
            <div class="hidden md:block relative max-w-7xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                    src="/media/starting11/backgrounds/kezdo_11_fooldal_hatter_fekvo.webp"
                    alt="Focipálya"
                    class="absolute inset-0 w-full h-full object-cover"
                />

                <Starting11Bubble
                    v-for="(item, index) in starters"
                    :key="index"
                    :item="item"
                    :reverse="item.position.left > 50"
                    :delay="index * 100"
                    class="absolute"
                    :style="{
                        top: item.position.top,
                        left: item.position.left,
                        transform: 'translate(-50%, -50%)',
                    }"
                />
            </div>

            <!-- Mobile list layout -->
            <div
                class="md:hidden relative rounded-2xl overflow-hidden bg-cover bg-center p-6"
                style="background-image: url('/media/starting11/backgrounds/kezdo_11_fooldal_hatter_allo.webp')"
            >
                <div class="absolute inset-0 bg-black/40"></div>
                <div class="relative z-10 flex flex-col gap-4">
                    <Starting11Bubble
                        v-for="(item, index) in starters"
                        :key="index"
                        :item="item"
                        :delay="index * 80"
                        class="self-start"
                    />
                </div>
            </div>

            <!-- Substitutes -->
            <div
                class="mt-0 bg-[#0B1E33] border border-t-0 border-default/30 py-12 max-w-7xl mx-auto rounded-b-2xl rounded-t-none"
            >
                <UContainer>
                    <div class="text-center mb-8">
                        <h3 class="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Cserék</h3>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
                        <Starting11Bubble
                            v-for="(item, index) in substitutes"
                            :key="index"
                            :item="item"
                            :reverse="false"
                            :delay="index * 100"
                        />
                    </div>
                </UContainer>
            </div>

            <!-- Allergens -->
            <div class="mt-16 md:mt-24 max-w-7xl mx-auto">
                <div class="text-center mb-8">
                    <h3 class="text-2xl md:text-3xl font-black text-default uppercase tracking-wider">Allergének</h3>
                </div>
                <div class="bg-elevated border border-default rounded-xl p-6 md:p-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        <div
                            v-for="allergen in allergens"
                            :key="allergen.code"
                            class="flex items-start gap-3 text-sm text-muted"
                        >
                            <span
                                class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                            >
                                {{ allergen.code }}
                            </span>
                            <span class="block">{{ text(allergen) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>

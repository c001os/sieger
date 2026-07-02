const menu = {
    title: {
        hu: 'Étlap 2025 ősz',
        en: 'Menu autumn 2025',
        de: 'Speisekarte Herbst 2025',
    },
    categories: [
        {
            hu: 'Leves',
            en: 'Soups',
            de: 'Suppen',
            items: [
                {
                    hu: 'Sütőtök krémleves, karamellizált tökmag',
                    en: 'Pumpkin cream soup served with caramelized pumpkin seeds',
                    de: 'Kürbiscremesuppe, karamellisierte Kürbiskerne',
                    prices: ['1.990 Ft'],
                },
                {
                    hu: 'Jókai bableves',
                    en: 'Jókai-style bean soup',
                    de: 'Bohnensuppe nach Jókai Art',
                    prices: ['2.490 Ft'],
                },
                {
                    hu: 'Húsleves gazdagon, velőscsont, torma',
                    en: 'Rich broth with marrowbone and horseradish',
                    de: 'Reiche Fleischsuppe, Markknochen, Kren',
                    prices: ['2.490 Ft'],
                },
            ],
        },
        {
            hu: 'Előétel',
            en: 'Starters',
            de: 'Vorspeisen',
            items: [
                {
                    hu: 'Sieger Tatár beefsteak',
                    en: 'Sieger Steak tartare',
                    de: 'Sieger Tatar-Beefsteak',
                    prices: ['5.790 Ft'],
                },
                {
                    hu: 'Sieger Kamra ízelítő (tepertőkrém, kolbász, sonka, sajt variációk, zöldségek, pékáru)',
                    en: 'Sieger Pantry appetizer (crackling cream, sausage, ham, cheese variations, vegetables and bakery goods)',
                    de: 'Sieger Kamra Verkostung (Pastete aus Grieben, Wurst, Schinken, Käsevariationen, Gemüse, Backwaren)',
                    prices: ['3.490 Ft'],
                },
            ],
        },
        {
            hu: 'Főétel',
            en: 'Main courses',
            de: 'Hauptgerichte',
            items: [
                {
                    hu: 'Bélszín steak, burgonyapüré, grillezett zöldségek',
                    en: 'Tenderloin steak with mashed potatoes and grilled vegetables',
                    de: 'Lendenbraten-Steak, Kartoffelpüree, gegrillte Gemüse',
                    prices: ['10.990 Ft / 200 g', '14.490 Ft / 300 g', '17.990 Ft / 400 g'],
                },
                {
                    hu: 'Tomahawk steak (80 dkg), Jacket Potato (héjában sült burgonya,cheddar sajttal), baconos zöldbab',
                    en: 'Tomahawk steak (800 g) with Jacket Potato (backed potato with cheddar cheese), green beans with bacon',
                    de: 'Tomahawk-Steak (800 g), Jacket Potato (Ofenkartoffeln mit Cheddat Käse), Speck-Bohnen',
                    prices: ['26.990 Ft'],
                },
                {
                    hu: 'Kacsacomb, sült káposztás cvekedli',
                    en: 'Duck leg served with cabbage and noodles',
                    de: 'Entenkeule, quadratische Nudeln mit Kohl',
                    prices: ['5.490 Ft'],
                },
                {
                    hu: 'Fogas filé, sütőtökös gnocchi',
                    en: 'Pike perch fillet served with pumpkin gnocchi',
                    de: 'Zanderfilet, Kürbis-Gnocchi',
                    prices: ['4.990 Ft'],
                },
                {
                    hu: 'Mézes-chilis lazac steak, sült zöldséges üveg tészta',
                    en: 'Honey-chilli salmon steak served with baked vegetable rice vermicelli',
                    de: 'Honig-Chili-Lachssteak, gebackene Gemüse-Glasnudeln',
                    prices: ['4.990 Ft'],
                },
                {
                    hu: 'Tarja steak, vadas mártás, zsemlegombóc',
                    en: 'Pork rib steak served with Hungarian-style vegetable-based sauce, bread dumplings',
                    de: 'Schweinesteak mit Ungarische Soße mit Wurzelgemüse, Senf und Sauerrahm, Semmelknödel',
                    prices: ['4.990 Ft'],
                },
                {
                    hu: 'Csirkemell steak, édesburgonya püré',
                    en: 'Chicken breast steak served with sweet potato purée',
                    de: 'Hähnchenbruststeak, Süßkartoffelpüree',
                    prices: ['4.590 Ft'],
                },
                {
                    hu: 'Rántott csirke variáció, hasábburgonya',
                    en: 'Fried chicken variation with french fries',
                    de: 'Variation von Backhendl, Pommes Frites',
                    prices: ['4.490 Ft'],
                },
                {
                    hu: 'Sieger "malacos krumpli" (hasábburgonya, pulled pork, cheddar sajt, jalapeno)',
                    en: 'Sieger pulled pork potatoes (French fries, pulled pork, cheddar cheese, jalapeno)',
                    de: 'Sieger Spanferkel ”pulled pork” mit Cheddar Käse überbacken auf Kartoffeln (Pommes Frites, Pulled Pork, Cheddar-Käse, Jalapeno)',
                    prices: ['4.490 Ft'],
                },
                {
                    hu: 'Karfiol steak, vörös pesto, kecskesajt',
                    en: 'Cauliflower steak served with red pesto and goat cheese',
                    de: 'Blumenkohlsteak, rotes Pesto, Ziegenkäse',
                    prices: ['4.290 Ft'],
                },
            ],
        },
        {
            hu: 'Saláta',
            en: 'Salads',
            de: 'Salate',
            items: [
                {
                    hu: 'Cézár saláta csirkével',
                    en: 'Caesar salad with chicken stripes',
                    de: 'Ceasar Salat mit Hühnerstreifen',
                    prices: ['3.990 Ft'],
                },
                {
                    hu: 'Cézár saláta tigrisrákkal',
                    en: 'Caesar salad with prawn',
                    de: 'Ceasar Salat mit Garnelen',
                    prices: ['4.590 Ft'],
                },
                {
                    hu: 'Sieger saláta (Bélszín csíkok, saláta levelek, pirított magvak, mézes-mustáros vinaigrette)',
                    en: 'Sieger-style salad (tenderloin strips, lettuce leaves, toasted seeds and honey-mustard vinaigrette)',
                    de: 'Siegersalat (Lendenbratenstreifen, Salatblätter, geröstete Kerne, Honig-Senf-Vinaigrette)',
                    prices: ['4.590 Ft'],
                },
            ],
        },
        {
            hu: 'Burgerek',
            en: 'Burgers',
            de: 'Burger',
            items: [
                {
                    hu: 'Cheese Burger (Házi kovászos buci, marhahús pogácsa, jégsaláta, cornish uborka, paradicsom, Sieger hamburger szósz, cheddar sajt, coleslaw)',
                    en: 'Cheese Burger (Homemade sourdough bun, beef patty, iceberg, cornish cucumber, tomato, Sieger burger sauce, cheddar cheese, coleslaw)',
                    de: 'Cheese Burger (Hausgemachter Sauerteig burger bun, Rindfleisch, Eisberg, cornish Gurken, Tomaten, Sieger burger sauce, Cheddar Käse, Coleslaw Salat)',
                    prices: ['4.590 Ft'],
                },
                {
                    hu: 'Texas Burger (Cheese Burger, bacon, jalapeno, rántott hagymakarika, csípős BBQ szósz, coleslaw)',
                    en: 'Texas Burger (Cheese burger, bacon, jalapeno, fried onion rings, hot BBQ sauce, coleslaw)',
                    de: 'Texas Burger (Cheese Burger, Bacon, Jalapeno, gebratene Zwiebelringe, scharfe BBQ-Sauce, Coleslaw Salat)',
                    prices: ['4.890 Ft'],
                },
                {
                    hu: 'Sieger Burger (Házi kovászos buci, marhahús pogácsa, kecskesajt, lilahagymalekvár, coleslaw)',
                    en: 'Sieger Burger (Homemade sourdough bun, beef patty, goat cheese, red onion jam, coleslaw)',
                    de: 'Sieger Burger (Hausgemachter Sauerteig Burger Bun, Rind Patty, Ziegenkäse, rote Zwiebelmarmelade, Coleslaw Salat)',
                    prices: ['4.990 Ft'],
                },
                {
                    hu: 'Vega Burger (Veggie pogácsa, kecskesajt, teljes kiörlésű hamburgerzsemle, coleslaw)',
                    en: 'Vega Burger (Veggie Burger, veggie patty, goatcheese, in whole weat bun, coleslaw)',
                    de: 'Vega Burger (Vegetarian Burger, Veggie Patty, Ziegenkäse, in Vollkornbun, Coleslaw Salat)',
                    prices: ['4.690 Ft'],
                },
            ],
        },
        {
            hu: 'Burger köretek',
            en: 'Burger sides',
            de: 'Burger Beilagen',
            items: [
                {
                    hu: 'Hasábburgonya',
                    en: 'french fries',
                    de: 'Pommes frites',
                    prices: ['990 Ft'],
                },
                {
                    hu: 'Steak burgonya',
                    en: 'wedges',
                    de: 'Kartoffel-Wedges',
                    prices: ['990 Ft'],
                },
                {
                    hu: 'Édesburgonya hasáb',
                    en: 'sweet potato fries',
                    de: 'Süßkartoffel-Pommes',
                    prices: ['1.490 Ft'],
                },
                {
                    hu: 'Teljes kiőrlésű zsemle',
                    en: 'whole weat bun',
                    de: 'Vollkorn Bun',
                    prices: ['300 Ft'],
                },
            ],
        },
        {
            hu: 'Desszertek',
            en: 'Desserts',
            de: 'Desserts',
            items: [
                {
                    hu: 'Császármorzsa, almahab',
                    en: 'Vienna crumbs with apple foam',
                    de: 'Kaiserschmarrn mit Apfelmus',
                    prices: ['3.490 Ft'],
                },
                {
                    hu: 'Sült sajttorta, téli gyümölcsök',
                    en: 'Baked cheesecake served with seasonal winter fruits',
                    de: 'Gebackener Käsekuchen, serviert mit winterlichen Früchten',
                    prices: ['1.990 Ft'],
                },
                {
                    hu: 'Fügés chia puding',
                    en: 'Fig chia pudding',
                    de: 'Chia-Pudding mit Feigen',
                    prices: ['1.990 Ft'],
                },
                {
                    hu: 'Egyetemi sajtválogatás',
                    en: 'University cheese selection',
                    de: 'Käseauswahl der Universität',
                    prices: ['4.190 Ft'],
                },
            ],
        },
    ],
};

export default defineEventHandler(() => menu);

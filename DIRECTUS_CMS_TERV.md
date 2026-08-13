# Sieger weboldal – Directus CMS terv

## 1. Cél és hatókör

A jelenleg statikus Nuxt 4 oldalt (sieger) szeretnénk úgy átalakítani, hogy a tartalmak nagy része egy Directus CMS-ből érkezzen. Ez lehetővé teszi, hogy a marketing/csaptartalom-kezelő csapat maga szerkessze a szövegeket, menüket, eseményeket, képeket és dokumentumokat kódérintés nélkül.

**Korai döntés:** a meglévő háromnyelvű (HU/EN/DE) tartalomkezelést a kódban már megszokott `{ hu, en, de }` objektumok formájában vigyük tovább Directusba. Ez egyszerűbb migrációt és szerkesztést jelent, mint a Directus beépített translations rendszere, és a 3 nyelv rögzített.

## 2. Jelenlegi statikus tartalmak felmérése

### 2.1 Nyelvi fájlok (`i18n/locales/*.json`)

Minden oldal szöveges tartalma JSON-ben van. Kulcsfontosságú csoportok:

- `nav` – navigációs címkék
- `hero` – főoldali hősáv
- `about` – „A Sieger" szekció
- `buttons`, `common`, `pdf` – gombok és közös szövegek
- `booking` – asztalfoglalási modal szövegei
- `pages.*` – oldal SEO/meta és címek (`home`, `etlap`, `itallap`, `esemenyek`, `starting11`, `chef`, `deli`)
- `sections.*` – szekciócímek és leírások (`specials`, `drink_specials`, `starting11`, `matches`, `gallery`, `map`)
- `footer` – lábléc, nyitvatartás, elérhetőségek

### 2.2 Komponensekben hardkódolt tartalmak

| Komponens / Oldal | Tartalom típusa | Forrás |
|---|---|---|
| `AppHeader.vue` | logó, közösségi ikonok, nav | `public/` + i18n |
| `AppFooter.vue` | cím, email, telefon, nyitvatartás, közösségi linkek, copyright | kód + i18n |
| `HeroSection.vue` | hősáv háttérkép, cím, alcím, CTA gomb | kód + i18n + `public/` |
| `BookingSection.vue` | főbb jellemzők ikonokkal (4 db) | kód + i18n |
| `BookingModal.vue` | foglalási helyszínek képei, leírások, telefon, online foglalás URL | kód + i18n + `public/` |
| `WeeklySpecialsSection.vue` | Chef ajánlata kártyák (név, leírás, kép, 4 db) | kód + `public/` |
| `MenusSection.vue` | Étlap / Itallap bemutató képek, linkek | kód + i18n + `public/` |
| `DrinkSpecialsSection.vue` | Ital specialitások szövegei és 4 képe | kód + i18n + `public/` |
| `Starting11Section.vue` | Kezdő 11 játékosai (11 db), cserék (4 db), allergének (14 db), pozíciók, logók, ételfotók | kód + `public/` |
| `MatchesSection.vue` | kiemelt meccsek (csapatok, színek, időpontok) | kód |
| `GallerySection.vue` | galéria rács képei (12 db) | kód + `public/` |
| `MapSection.vue` | Google Maps embed URL | kód |
| `esemenyek.vue` | események listája (3 db) | kód + `public/` |
| `deli-felido.vue` | heti menü (dátumtartomány, kép, szöveg, ár) | kód + `public/` |
| `chef-ajanlata.vue` | PDF link | kód + `public/` |

### 2.3 Dinamikus menüadatok (`server/api/`)

- `server/api/menu.get.ts` – teljes étlap kategóriákkal és tételekkel (HU/EN/DE + árak + képek)
- `server/api/drinks.get.ts` – teljes itallap kategóriákkal és tételekkel

Ezek jelenleg statikus JS objektumok. A cél, hogy Directus collection-ökből szolgáljuk ki őket.

### 2.4 Média és dokumentumok (`public/`)

- **Logó:** `public/media/logos/sieger_feher_logo.png`
- **Ikonok:** `public/ikonok/` (email, facebook, instagram, telefon, lokáció, web)
- **Beltér/terasz/VIP:** `public/media/interior/`
- **Étel képek:** `public/media/food/` (fejlécek, menü kategóriaképek, specialitások)
- **Ital képek:** `public/media/drinks/` (fejléc, menü kategóriaképek, specialitások)
- **Kezdő 11:** `public/media/starting11/` (pálya hátterek, csapatlogók, ételfotók)
- **Galéria:** `public/media/gallery/`
- **Események:** `public/media/events/` (1200×630)
- **Dokumentumok:** `public/documents/` (étlap, itallap, chef ajánlata, déli félidő PDF)
- **Favicon:** `public/favicon*.png`, `public/apple-touch-icon.png`

### 2.5 SEO/meta

Minden oldalon `useHead` használatával beállított `title` és `description`. Ezek jelenleg az i18n fájlokból jönnek.

### 2.6 Hiányzó oldal

A lábléc `/adatvedelem` linkre mutat, de nincs hozzá oldal a `app/pages/` alatt. A `scrape/data/content/adatkezelesi_tajekoztato.md` tartalmaz egy korábbi adatvédelmi szöveget, amelyet érdemes lenne Directus oldaltartalomként kezelni.

## 3. Javasolt Directus adatmodell

A meglévő Directus példányban már van `languages` collection (code PK). A weboldalhoz az alábbi új collection-öket javasoljuk.

### 3.1 `site_settings` – globális beállítások (1 db singleton)

| Mező | Típus | Megjegyzés |
|---|---|---|
| `phone` | string | `+36 20 615 6491` |
| `email` | string | `info@sieger.hu` |
| `address` | string | `9026 Győr, Egyetem tér 1.` |
| `facebook_url` | string | |
| `instagram_url` | string | |
| `online_booking_url` | string | Dish.co link |
| `map_embed_url` | string | Google Maps embed URL |
| `logo` | file (M2O) | `sieger_feher_logo.png` |
| `opening_hours_monday` | string | `11:00 – 17:00` |
| `opening_hours_tue_sat` | string | `11:00 – 00:00` |
| `opening_hours_sunday` | string | `ZÁRVA / CLOSED / GESCHLOSSEN` |
| `copyright_text` | string | `© 2026 Sieger Sport Bár. Minden jog fenntartva!` |
| `footer_tagline` | JSON `{hu,en,de}` | |
| `privacy_page` | M2O → pages | lábléc adatvédelmi link |

### 3.2 `pages` – oldalak SEO és fő tartalma

| Mező | Típus | Megjegyzés |
|---|---|---|
| `slug` | string, PK | `home`, `etlap`, `itallap`, `esemenyek`, `kezdo-11`, `chef`, `deli`, `adatvedelem` |
| `status` | string | published / draft / archived |
| `meta_title` | JSON `{hu,en,de}` | |
| `meta_description` | JSON `{hu,en,de}` | |
| `heading` | JSON `{hu,en,de}` | oldalcím, ahol van |
| `lead` | JSON `{hu,en,de}` | alcím/leírás |
| `body` | JSON `{hu,en,de}` | adatvédelmi/oldalszöveg (markdown/html) |
| `sort` | integer | |

### 3.3 `nav_items` – navigáció

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `label` | JSON `{hu,en,de}` | |
| `url` | string | `/`, `/#about`, `/itallap`, stb. |
| `parent` | M2O → nav_items | legördülő almenük |
| `sort` | integer | |
| `is_external` | boolean | |
| `visible` | boolean | |

### 3.4 `text_blocks` – újrafelhasználható szövegek

| Mező | Típus | Megjegyzés |
|---|---|---|
| `key` | string, PK | pl. `hero.welcome`, `about.title`, `sections.matches.description` |
| `value` | JSON `{hu,en,de}` | |
| `context` | string | opcionális csoportosítás |

Ez kiválthatja az i18n JSON-ek nagy részét. A kliens lekéri az összes blokkot és `useI18n` mellé/elé beépíti őket.

### 3.5 `special_offers` – Chef ajánlata / kiemelt ételek

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `name` | JSON `{hu,en,de}` | |
| `description` | JSON `{hu,en,de}` | |
| `image` | file (M2O) | |
| `sort` | integer | |
| `visible` | boolean | |

### 3.6 `drink_specials` – ital specialitások

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `type` | string | `image` vagy `text` |
| `title_top` | JSON `{hu,en,de}` | csak text típusnál |
| `title_bottom` | JSON `{hu,en,de}` | csak text típusnál |
| `description` | JSON `{hu,en,de}` | |
| `image` | file (M2O) | image típusnál |
| `sort` | integer | |

### 3.7 `menu_categories` – étlap/itallap kategóriák

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `menu_type` | string | `food` vagy `drinks` |
| `name` | JSON `{hu,en,de}` | |
| `images` | files (O2M) | 0–3 kép |
| `sort` | integer | |
| `visible` | boolean | |

### 3.8 `menu_items` – étlap/itallap tételek

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `category` | M2O → menu_categories | |
| `name` | JSON `{hu,en,de}` | |
| `prices` | JSON (tömb) | `["1.990 Ft", "2.490 Ft / 0,5 l"]` |
| `sort` | integer | |
| `visible` | boolean | |

### 3.9 `starting11_items` – Kezdő 11

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `name` | JSON `{hu,en,de}` | |
| `description` | JSON `{hu,en,de}` | |
| `price` | string | |
| `logo_image` | file (M2O) | csapatlogó |
| `food_image` | file (M2O) | hover ételfotó |
| `position_top` | string | `%` (pl. `15%`) |
| `position_left` | string | `%` |
| `is_substitute` | boolean | alapeset false |
| `sort` | integer | |
| `visible` | boolean | |

### 3.10 `allergens` – allergének

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `code` | string | `1`–`14` |
| `name` | JSON `{hu,en,de}` | |
| `sort` | integer | |

### 3.11 `events` – események

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `status` | string | published / draft / archived |
| `title` | JSON `{hu,en,de}` | |
| `date_text` | JSON `{hu,en,de}` | pl. `2026. július 19.` |
| `time` | string | `21:00` vagy üres |
| `description` | JSON `{hu,en,de}` | |
| `image` | file (M2O) | ajánlott 1200×630 |
| `featured` | boolean | kiemelt esemény |
| `button_label` | string | `itallap`, `etlap`, `info`, `reszletek` |
| `button_type` | string | `route` / `external` / `pdf` |
| `button_target` | string | URL vagy route |
| `sort` | integer | |

### 3.12 `weekly_menu` – Déli félidő

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `status` | string | |
| `week_range` | JSON `{hu,en,de}` | pl. `2026. július 21. – 27.` |
| `image` | file (M2O) | |
| `menu_text` | JSON `{hu,en,de}` | sortöréses szöveg |
| `price` | string | `2 990 Ft` |
| `sort` | integer | |

### 3.13 `match_cards` – meccslista

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `team1_name` | string | |
| `team1_color` | string | hex |
| `team2_name` | string | |
| `team2_color` | string | hex |
| `time` | string | |
| `date_text` | JSON `{hu,en,de}` | |
| `sort` | integer | |
| `visible` | boolean | |

### 3.14 `gallery_images` – galéria

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `image` | file (M2O) | |
| `alt` | JSON `{hu,en,de}` | |
| `sort` | integer | |
| `visible` | boolean | |

### 3.15 `documents` – letölthető PDF-ek

| Mező | Típus | Megjegyzés |
|---|---|---|
| `id` | uuid | |
| `slug` | string, unique | `etlap`, `itallap`, `chef`, `deli` |
| `title` | JSON `{hu,en,de}` | |
| `file` | file (M2O) | PDF |
| `category` | string | `food_menu`, `drinks_menu`, `chef`, `deli` |
| `visible` | boolean | |
| `sort` | integer | |

## 4. Migrációs terv

### 4.0 Előkészületek

1. Direcuts projectben létrehozni egy dedikált role-t (`Website Editor`) a szerkesztőknek.
2. A `public/` mappában lévő képeket és PDF-eket feltölteni Directus Files-ba.
3. Környezeti változókat beállítani a Nuxt oldalon:
   - `DIRECTUS_URL`
   - `DIRECTUS_TOKEN` (read-only service token a buildhez)

### 4.1 Szakaszok

| Szakasz | Teendő | Eredmény |
|---|---|---|
| **1. Alapok** | `site_settings`, `pages`, `nav_items`, `text_blocks` létrehozása | Globális szövegek, SEO, nav szerkeszthető |
| **2. Menük** | `menu_categories`, `menu_items` létrehozása; `menu.get.ts` és `drinks.get.ts` átírása | Étlap/itallap CMS-ből |
| **3. Szekciók** | `special_offers`, `drink_specials`, `events`, `weekly_menu`, `match_cards`, `gallery_images` létrehozása | Főoldali és esemény szekciók szerkeszthetők |
| **4. Kezdő 11** | `starting11_items`, `allergens` létrehozása | Teljes Kezdő 11 CMS-ből |
| **5. Dokumentumok** | `documents` létrehozása, PDF-ek feltöltése | Letölthető ajánlatok CMS-ből |
| **6. Képek** | `public/` → Directus Files migrálása | Képek asset-ként kezelve |
| **7. i18n leépítés** | JSON-ek szűkítése vagy teljes eltávolítása; `text_blocks` használata | Csak a kódban maradó statikus szövegek maradnak |

## 5. Nuxt oldal integrációja

### 5.1 Új függőség

```bash
npm install @directus/sdk
```

### 5.2 Directus kliens

Új fájl: `app/composables/useDirectus.ts` vagy `app/utils/directus.ts`

```ts
import { createDirectus, rest, readItems, readSingleton } from '@directus/sdk';

const client = createDirectus(process.env.DIRECTUS_URL).with(rest());

export function useDirectus() {
  return {
    getSettings: () => client.request(readSingleton('site_settings')),
    getPages: () => client.request(readItems('pages', { limit: -1 })),
    getTextBlocks: () => client.request(readItems('text_blocks', { limit: -1 })),
    getMenu: () => client.request(readItems('menu_categories', {
      fields: ['*', 'images.*', 'items.*'],
      filter: { menu_type: { _eq: 'food' }, visible: { _eq: true } },
      sort: ['sort'],
      limit: -1,
    })),
    // ...
  };
}
```

### 5.2 API endpoint-ek átalakítása

A `server/api/menu.get.ts` és `server/api/drinks.get.ts` ne statikus objektumot, hanem Directus-ból kérje le az adatokat, és alakítsa át a meglévő UI formátumra:

```ts
// server/api/menu.get.ts
export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const categories = await $fetch(`${config.directusUrl}/items/menu_categories`, {
    headers: { Authorization: `Bearer ${config.directusToken}` },
    query: {
      fields: ['*', 'images.directus_files_id', 'items.*'],
      filter: JSON.stringify({ menu_type: { _eq: 'food' }, visible: { _eq: true } }),
      sort: 'sort',
      limit: -1,
    },
  });
  // map Directus response → current frontend shape
  return transformMenuCategories(categories.data);
});
```

### 5.3 Oldalak átalakítása

A `useHead` meta címeket és az oldal címeket a `pages` collection-ből kell venni:

```ts
const { data: page } = await useAsyncData('page-etlap', () => getPage('etlap'));

useHead(() => ({
  title: page.value?.meta_title?.hu,
  meta: [{ name: 'description', content: page.value?.meta_description?.hu }],
}));
```

### 5.4 Képek kezelése

A Directus file mezők URL-jének feloldása segítő függvénnyel:

```ts
export function getFileUrl(fileId: string, options?: { width?: number; quality?: number }) {
  if (!fileId) return '';
  const params = new URLSearchParams();
  if (options?.width) params.set('width', String(options.width));
  if (options?.quality) params.set('quality', String(options.quality));
  const qs = params.toString();
  return `${useRuntimeConfig().directusUrl}/assets/${fileId}${qs ? `?${qs}` : ''}`;
}
```

### 5.5 i18n integráció

A `text_blocks` kulcsait érdemes betölteni egy globális store-ba vagy composable-ba, és a sablonokban `$t` helyett `$cms(key)` szerű segédfüggvénnyel hivatkozni. Alternatívaként a meglévő i18n JSON-eket build/run-time-ban felülírhatjuk a CMS-ből jött értékekkel.

## 6. Build és teljesítmény

- **Statikus generálás:** `nuxt generate` esetén a CMS adatokat buildkor kell lekérni. Ehhez a `DIRECTUS_TOKEN`-nek olvasási jogosultsággal kell rendelkeznie.
- **Cache:** a `useAsyncData` alapértelmezett cache-elése jól működik SSR-nél. Hosszabb `maxAge` beállítása ajánlott a menükhöz.
- **Képek:** a Directus asset transformation (`?width=...&format=webp`) használata csökkenti a forgalmat.
- **Preview:** ha szükséges, a `status` mező alapján lehet draft preview-t készíteni egyedi tokennel.

## 7. Üzemeltetési szempontok

- **Szerkesztők:** csak a weboldal collection-ökhöz adjunk jogot; a meglévő `vb_*` collection-öket hagyjuk külön jogkörön.
- **Média rendezése:** Directus mappák használata (`Logók`, `Étel`, `Ital`, `Események`, `Galéria`, `Dokumentumok`).
- **Image dimensions:** az eseményekhez továbbra is 1200×630 ajánlott; a Kezdő 11 logói négyzetesek legyenek.
- **Menü frissítés:** amikor az étlap/itallap változik, elég a Directusban szerkeszteni; újra build nem szükséges, ha SSR/hybrid módban fut az oldal.

## 8. Kockázatok és döntési pontok

| Kockázat | Megoldási javaslat |
|---|---|
| Háromnyelvű mezők sok redundanciát okalhatnak | A `{hu,en,de}` JSON mezők elfogadhatók 3 rögzített nyelvnél; ha a jövőben több nyelv jön, át kell térni a Directus translations patternre |
| Képek URL-jei a CMS-ben változnak | Mindig `directus_files_id`-ra hivatkozzunk, ne fix URL-re |
| Nagy mennyiségű képmigráció | Tömeges feltöltés Directus Files UI-on vagy API scripttel |
| SEO title/description dinamikus | `pages` collection-ből generáljuk, fallback az i18n-re maradhat átmenetileg |
| i18n kulcsok és CMS kulcsok párhuzamos élete | Fokozatosan szüntessük meg az i18n JSON-t; a végállapotban csak a ritkán változó UI címkék maradnak ott |
| `/adatvedelem` oldal hiánya | Hozzuk létre `pages` collectionben `adatvedelem` slug-gel, és importáljuk a `scrape/data/content/adatkezelesi_tajekoztato.md` szövegét |

## 9. Következő lépések (ajánlott sorrend)

1. Döntés a nyelvi mezők formátumáról (JSON vs. translations).
2. Directus collection-ök létrehozása az 1. szakaszban leírtak szerint.
3. Képek és PDF-ek feltöltése Directus Files-ba.
4. `site_settings`, `pages`, `text_blocks` feltöltése.
5. Nuxt `useDirectus` composable és környezeti változók beállítása.
6. `server/api/menu.get.ts` és `server/api/drinks.get.ts` átírása Directus lekérdezésre.
7. Egy oldal (pl. `etlap`) teljes átállítása CMS-ről jövő adatra, tesztelés.
8. További szekciók (Hero, About, Specials, Events, Kezdő 11, Matches, Gallery) átállítása.
9. i18n JSON-ek leépítése és a maradék kódbeli szövegek áthelyezése `text_blocks`-ba.
10. `/adatvedelem` oldal létrehozása és a scrape-ből származó adatvédelmi szöveg importálása.

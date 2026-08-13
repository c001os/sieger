const DIRECTUS_URL = 'https://sieger-admin.previsionlab.hu';
const TOKEN = 'JlYnFZSEpBXHMqICNO0B_bXVsMslwDJe';

const HUNGARIAN_NAMES = {
  allergens: 'Allergének',
  documents: 'Dokumentumok',
  drink_categories: 'Ital kategóriák',
  drink_items: 'Ital tételek',
  drink_specials: 'Ital specialitások',
  events: 'Események',
  food_categories: 'Étel kategóriák',
  food_items: 'Étel tételek',
  gallery_images: 'Galéria képek',
  match_cards: 'Meccskártyák',
  pages: 'Oldalak',
  site_settings: 'Oldal beállítások',
  special_offers: 'Különleges ajánlatok',
  starting11_items: 'Kezdő 11 tételek',
  weekly_menu: 'Heti menü',
  food_categories_translations: 'Étel kategóriák fordítások',
  food_items_translations: 'Étel tételek fordítások',
  drink_categories_translations: 'Ital kategóriák fordítások',
  drink_items_translations: 'Ital tételek fordítások',
  pages_translations: 'Oldalak fordítások',
  site_settings_translations: 'Oldal beállítások fordítások',
  special_offers_translations: 'Különleges ajánlatok fordítások',
  drink_specials_translations: 'Ital specialitások fordítások',
  starting11_items_translations: 'Kezdő 11 tételek fordítások',
  weekly_menu_translations: 'Heti menü fordítások',
  allergens_translations: 'Allergének fordítások',
  documents_translations: 'Dokumentumok fordítások',
  events_translations: 'Események fordítások',
  gallery_images_translations: 'Galéria képek fordítások',
  match_cards_translations: 'Meccskártyák fordítások',
};

async function api(path, options = {}) {
  const url = `${DIRECTUS_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} for ${path}: ${text}`);
  }
  return res.json().catch(() => ({}));
}

async function main() {
  const data = await api('/collections');
  const collections = data.data || [];

  const systemPrefixes = ['directus_', 'languages', 'ai_prompts'];
  const relevant = collections.filter(
    (c) => !systemPrefixes.some((p) => c.collection?.startsWith(p))
  );

  console.log(`Found ${relevant.length} collections to process`);

  for (const c of relevant) {
    const name = HUNGARIAN_NAMES[c.collection];
    if (!name) {
      console.log(`Skipping ${c.collection} (no Hungarian name in dictionary)`);
      continue;
    }

    const translations = Array.isArray(c.meta?.translations)
      ? c.meta.translations.filter((t) => t.language !== 'hu-HU')
      : [];

    if (translations.some((t) => t.language === 'hu-HU')) {
      console.log(`Already translated: ${c.collection}`);
      continue;
    }

    translations.push({ language: 'hu-HU', translation: name });

    try {
      await api(`/collections/${c.collection}`, {
        method: 'PATCH',
        body: JSON.stringify({ meta: { translations } }),
      });
      console.log(`✅ Updated ${c.collection} -> ${name}`);
    } catch (err) {
      console.error(`❌ Failed ${c.collection}: ${err.message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

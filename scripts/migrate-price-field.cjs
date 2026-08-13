// Egyszeri migráció: a `prices` (JSON tömb) mező tartalmát átmásolja a `price` (string) mezőbe,
// majd törli a `prices` mezőt és a fordítási táblákból a hibás `category` mezőt.
const DIRECTUS_URL = 'https://sieger-admin.previsionlab.hu';
const TOKEN = 'JlYnFZSEpBXHMqICNO0B_bXVsMslwDJe';

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

async function fillPrice(collection) {
  const { data } = await api(`/items/${collection}?limit=-1&fields=id,price,prices`);
  let updated = 0;
  for (const item of data) {
    // Több ár esetén vesszővel elválasztva egy stringbe (pl. "1.100 Ft / 0,3 l, 1.700 Ft / 0,5 l")
    const price = (item.prices || []).join(', ') || null;
    if (price !== item.price) {
      await api(`/items/${collection}/${item.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ price }),
      });
      updated++;
    }
  }
  console.log(`${collection}: ${updated}/${data.length} sor frissítve`);
}

const FIELDS_TO_DELETE = [
  ['food_items', 'prices'],
  ['drink_items', 'prices'],
  ['food_items_translations', 'category'],
  ['drink_items_translations', 'category'],
];

async function main() {
  await fillPrice('food_items');
  await fillPrice('drink_items');

  for (const [collection, field] of FIELDS_TO_DELETE) {
    try {
      await api(`/fields/${collection}/${field}`, { method: 'DELETE' });
      console.log(`✅ Mező törölve: ${collection}.${field}`);
    } catch (err) {
      console.error(`❌ Mező törlése sikertelen: ${collection}.${field} -> ${err.message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

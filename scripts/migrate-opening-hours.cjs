// Egyszeri migráció: a site_settings nyitvatartás mezőit naponkénti mezőkre cseréli
// (opening_hours_monday..sunday), feltölti az adatokat, és törli az összevont opening_hours_tue_sat mezőt.
const DIRECTUS_URL = 'https://sieger-admin.previsionlab.hu';
const TOKEN = 'JlYnFZSEpBXHMqICNO0B_bXVsMslwDJe';

async function api(path, options = {}) {
  const res = await fetch(`${DIRECTUS_URL}${path}`, {
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

// Napok: mezőnév, sorrend, magyar címke, note
const DAYS = [
  { key: 'monday', sort: 9, label: 'Nyitvatartás - hétfő', note: 'Hétfői nyitvatartás. Ha zárva van, hagyd üresen.' },
  { key: 'tuesday', sort: 10, label: 'Nyitvatartás - kedd', note: 'Keddi nyitvatartás. Ha zárva van, hagyd üresen.' },
  { key: 'wednesday', sort: 11, label: 'Nyitvatartás - szerda', note: 'Szerdai nyitvatartás. Ha zárva van, hagyd üresen.' },
  { key: 'thursday', sort: 12, label: 'Nyitvatartás - csütörtök', note: 'Csütörtöki nyitvatartás. Ha zárva van, hagyd üresen.' },
  { key: 'friday', sort: 13, label: 'Nyitvatartás - péntek', note: 'Pénteki nyitvatartás. Ha zárva van, hagyd üresen.' },
  { key: 'saturday', sort: 14, label: 'Nyitvatartás - szombat', note: 'Szombati nyitvatartás. Ha zárva van, hagyd üresen.' },
  { key: 'sunday', sort: 15, label: 'Nyitvatartás - vasárnap', note: 'Vasárnapi nyitvatartás. Ha zárva van, hagyd üresen.' },
];

// Értékek: üres string = zárva
const VALUES = {
  opening_hours_monday: '11:00 – 17:00',
  opening_hours_tuesday: '11:00 – 00:00',
  opening_hours_wednesday: '11:00 – 00:00',
  opening_hours_thursday: '11:00 – 00:00',
  opening_hours_friday: '11:00 – 00:00',
  opening_hours_saturday: '11:00 – 00:00',
  opening_hours_sunday: '',
};

async function main() {
  // 1) mezők létrehozása / frissítése
  for (const day of DAYS) {
    const field = `opening_hours_${day.key}`;
    const body = {
      field,
      type: 'string',
      meta: {
        interface: 'input',
        options: { iconLeft: 'schedule', placeholder: '11:00 – 17:00' },
        width: 'half',
        sort: day.sort,
        translations: [{ language: 'hu-HU', translation: day.label }],
        note: day.note,
      },
      schema: { max_length: 255, is_nullable: true },
    };
    try {
      await api(`/fields/site_settings/${field}`, { method: 'PATCH', body: JSON.stringify(body) });
      console.log(`✅ Frissítve: ${field}`);
    } catch {
      await api('/fields/site_settings', { method: 'POST', body: JSON.stringify(body) });
      console.log(`✅ Létrehozva: ${field}`);
    }
  }

  // 2) adatok feltöltése
  const { data } = await api('/items/site_settings', {
    method: 'PATCH',
    body: JSON.stringify(VALUES),
  });
  console.log('✅ Adatok frissítve:', data.id);

  // 3) régi összevont mező törlése
  try {
    await api('/fields/site_settings/opening_hours_tue_sat', { method: 'DELETE' });
    console.log('✅ Törölve: opening_hours_tue_sat');
  } catch (err) {
    console.error('❌ opening_hours_tue_sat törlése:', err.message);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

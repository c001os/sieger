import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import xlsx from 'xlsx';

const categoryTranslations: Record<
    string,
    { hu: string; en: string; de: string }
> = {
    LEVES: { hu: 'Leves', en: 'Soups', de: 'Suppen' },
    ELŐÉTEL: { hu: 'Előétel', en: 'Starters', de: 'Vorspeisen' },
    FŐÉTEL: { hu: 'Főétel', en: 'Main courses', de: 'Hauptgerichte' },
    SALÁTA: { hu: 'Saláta', en: 'Salads', de: 'Salate' },
    BURGEREK: { hu: 'Burgerek', en: 'Burgers', de: 'Burger' },
    'BURGER KÖRETEK': {
        hu: 'Burger köretek',
        en: 'Burger sides',
        de: 'Burger Beilagen',
    },
    DESSZERTEK: { hu: 'Desszertek', en: 'Desserts', de: 'Desserts' },
};

function formatPrice(value: string | number | undefined): string {
    if (value === undefined || value === null) return '';
    if (typeof value === 'number') {
        return `${value.toLocaleString('hu-HU')} Ft`;
    }
    const str = String(value).trim();
    if (!str) return '';
    return str;
}

export default defineEventHandler(() => {
    const filePath = resolve(
        process.cwd(),
        'lead/Étlap/Sieger_etlap_2025_osz.xlsx',
    );
    const workbook = xlsx.read(readFileSync(filePath), { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet, {
        header: 1,
        blankrows: false,
    }) as unknown[][];

    const categories: {
        hu: string;
        en: string;
        de: string;
        items: {
            hu: string;
            en: string;
            de: string;
            prices: string[];
        }[];
    }[] = [];

    let currentCategory: (typeof categories)[number] | null = null;

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const hu = row[0] ? String(row[0]).trim() : '';
        const en = row[1] ? String(row[1]).trim() : '';
        const de = row[2] ? String(row[2]).trim() : '';
        const price = formatPrice(row[3]);

        // Category row: only HU text, no EN/DE/price
        if (hu && !en && !de && !price) {
            const key = hu.toUpperCase().replace(/\s+/g, ' ').trim();
            const names = categoryTranslations[key] || { hu, en: hu, de: hu };
            currentCategory = {
                hu: names.hu,
                en: names.en,
                de: names.de,
                items: [],
            };
            categories.push(currentCategory);
            continue;
        }

        if (!currentCategory) continue;

        // New item
        if (hu) {
            currentCategory.items.push({
                hu,
                en: en || hu,
                de: de || hu,
                prices: price ? [price] : [],
            });
            continue;
        }

        // Additional price row for the last item
        if (price && currentCategory.items.length > 0) {
            currentCategory.items[currentCategory.items.length - 1].prices.push(
                price,
            );
        }
    }

    return {
        title: {
            hu: 'Étlap 2025 ősz',
            en: 'Menu autumn 2025',
            de: 'Speisekarte Herbst 2025',
        },
        categories: categories.filter((c) => c.items.length > 0),
    };
});

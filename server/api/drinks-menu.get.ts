interface Translation {
    languages_code: string;
    name: string;
    description?: string;
}

interface DirectusDrinkCategory {
    id: number;
    name: string;
    images: string[] | null;
    sort: number;
    visible: boolean | number;
    translations: Translation[];
}

interface DirectusDrinkItem {
    id: number;
    name: string;
    description: string | null;
    price: string | null;
    category: number;
    sort: number;
    visible: boolean | number;
    translations: Translation[];
}

function getTranslation(translations: Translation[], code: string) {
    return translations.find((t) => t.languages_code === code);
}

function buildText(base: string | null | undefined, translations: Translation[]) {
    const en = getTranslation(translations, 'en-US');
    const de = getTranslation(translations, 'de-DE');
    return {
        hu: base ?? '',
        en: en?.name ?? base ?? '',
        de: de?.name ?? base ?? '',
    };
}

function buildDescription(base: string | null | undefined, translations: Translation[]) {
    const en = getTranslation(translations, 'en-US');
    const de = getTranslation(translations, 'de-DE');
    return {
        hu: base ?? '',
        en: en?.description ?? base ?? '',
        de: de?.description ?? base ?? '',
    };
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const [{ data: categories }, { data: items }] = await Promise.all([
        $fetch<{ data: DirectusDrinkCategory[] }>(`${url}/items/drink_categories`, {
            headers: { Authorization: `Bearer ${token}` },
            query: {
                fields: 'id,name,images,sort,visible,translations.languages_code,translations.name',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
                limit: -1,
            },
        }),
        $fetch<{ data: DirectusDrinkItem[] }>(`${url}/items/drink_items`, {
            headers: { Authorization: `Bearer ${token}` },
            query: {
                fields: 'id,name,description,price,category,sort,visible,translations.languages_code,translations.name,translations.description',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
                limit: -1,
            },
        }),
    ]);

    const itemsByCategory = new Map<number, DirectusDrinkItem[]>();
    for (const item of items) {
        const list = itemsByCategory.get(item.category) ?? [];
        list.push(item);
        itemsByCategory.set(item.category, list);
    }

    return {
        title: { hu: 'Itallap', en: 'Drinks Menu', de: 'Getränkekarte' },
        categories: categories.map((category) => ({
            ...buildText(category.name, category.translations),
            images: (category.images ?? [])
                .filter(Boolean)
                .map((id) => `${url}/assets/${id}`),
            items: (itemsByCategory.get(category.id) ?? []).map((item) => ({
                ...buildText(item.name, item.translations),
                description: buildDescription(item.description, item.translations),
                price: item.price ?? '',
            })),
        })),
    };
});

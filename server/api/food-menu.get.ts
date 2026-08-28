interface Translation {
    languages_code: string;
    name: string;
    description?: string;
}

interface DirectusFoodCategory {
    id: number;
    name: string;
    image: string | null;
    sort: number;
    visible: boolean | number;
    translations: Translation[];
}

interface DirectusFoodItem {
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
        $fetch<{ data: DirectusFoodCategory[] }>(`${url}/items/food_categories`, {
            headers: { Authorization: `Bearer ${token}` },
            query: {
                fields: 'id,name,image,sort,visible,translations.languages_code,translations.name',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
                limit: -1,
            },
        }),
        $fetch<{ data: DirectusFoodItem[] }>(`${url}/items/food_items`, {
            headers: { Authorization: `Bearer ${token}` },
            query: {
                fields: 'id,name,description,price,category,sort,visible,translations.languages_code,translations.name,translations.description',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
                limit: -1,
            },
        }),
    ]);

    const itemsByCategory = new Map<number, DirectusFoodItem[]>();
    for (const item of items) {
        const list = itemsByCategory.get(item.category) ?? [];
        list.push(item);
        itemsByCategory.set(item.category, list);
    }

    return {
        title: { hu: 'Étlap', en: 'Menu', de: 'Speisekarte' },
        categories: categories.map((category) => ({
            ...buildText(category.name, category.translations),
            image: category.image ? `${url}/assets/${category.image}` : null,
            items: (itemsByCategory.get(category.id) ?? []).map((item) => ({
                ...buildText(item.name, item.translations),
                description: buildDescription(item.description, item.translations),
                price: item.price ?? '',
            })),
        })),
    };
});

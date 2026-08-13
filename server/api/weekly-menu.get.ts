import type { DirectusWeeklyMenu, DirectusTranslation } from '~/server/utils/directus';

function getTranslation(translations: DirectusTranslation[], code: string) {
    return translations.find((t) => t.languages_code === code);
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusWeeklyMenu[] }>(
        `${url}/items/weekly_menu`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,week,text,price,image,sort,translations.languages_code,translations.week,translations.text',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
                limit: 1,
            },
        }
    );

    const item = data[0];
    if (!item) {
        return null;
    }

    const en = getTranslation(item.translations, 'en-US');
    const de = getTranslation(item.translations, 'de-DE');

    return {
        id: item.id,
        week: {
            hu: item.week ?? '',
            en: en?.week ?? item.week ?? '',
            de: de?.week ?? item.week ?? '',
        },
        text: {
            hu: item.text ?? '',
            en: en?.text ?? item.text ?? '',
            de: de?.text ?? item.text ?? '',
        },
        price: item.price ?? '',
        image: item.image ? `${url}/assets/${item.image}` : '',
    };
});

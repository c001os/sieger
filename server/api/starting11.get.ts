import type { DirectusStarting11Item, DirectusTranslation } from '~/server/utils/directus';

function getTranslation(translations: DirectusTranslation[], code: string) {
    return translations.find((t) => t.languages_code === code);
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusStarting11Item[] }>(
        `${url}/items/starting11_items`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,name,description,price,position_top,position_left,is_substitute,sort,visible,logo_image.*,food_image.*,translations.languages_code,translations.name,translations.description',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
            },
        }
    );

    const items = data.map((item) => {
        const en = getTranslation(item.translations, 'en-US');
        const de = getTranslation(item.translations, 'de-DE');

        return {
            id: item.id,
            name: {
                hu: item.name,
                en: en?.name ?? item.name,
                de: de?.name ?? item.name,
            },
            description: {
                hu: item.description,
                en: en?.description ?? item.description,
                de: de?.description ?? item.description,
            },
            price: item.price,
            logo: buildAssetUrl(url, item.logo_image) ?? '',
            foodImage: buildAssetUrl(url, item.food_image) ?? '',
            position: {
                top: item.position_top,
                left: item.position_left,
            },
            is_substitute: item.is_substitute,
        };
    });

    return {
        starters: items.filter((item) => !item.is_substitute),
        substitutes: items.filter((item) => item.is_substitute),
    };
});

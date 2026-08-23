import type { DirectusSpecialOffer, DirectusTranslation } from '~~/server/utils/directus';

function getTranslation(translations: DirectusTranslation[], code: string) {
    return translations.find((t) => t.languages_code === code);
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusSpecialOffer[] }>(
        `${url}/items/special_offers`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,name,description,image.*,translations.languages_code,translations.name,translations.description',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
            },
        }
    );

    return data.map((item) => {
        const en = getTranslation(item.translations, 'en-US');
        const de = getTranslation(item.translations, 'de-DE');

        return {
            id: item.id,
            name: {
                hu: item.name,
                en: en?.name ?? item.name,
                de: de?.name ?? item.name,
            },
            desc: {
                hu: item.description,
                en: en?.description ?? item.description,
                de: de?.description ?? item.description,
            },
            image: buildAssetUrl(url, item.image) ?? '',
        };
    });
});

import type { DirectusDrinkSpecial, DirectusTranslation } from '~~/server/utils/directus';

function getTranslation(translations: DirectusTranslation[], code: string) {
    return translations.find((t) => t.languages_code === code);
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusDrinkSpecial[] }>(
        `${url}/items/drink_specials`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,type,title_top,title_bottom,description,image.*,translations.languages_code,translations.title_top,translations.title_bottom,translations.description',
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
            type: item.type,
            titleTop: {
                hu: item.title_top ?? '',
                en: en?.title_top ?? item.title_top ?? '',
                de: de?.title_top ?? item.title_top ?? '',
            },
            titleBottom: {
                hu: item.title_bottom ?? '',
                en: en?.title_bottom ?? item.title_bottom ?? '',
                de: de?.title_bottom ?? item.title_bottom ?? '',
            },
            description: {
                hu: item.description ?? '',
                en: en?.description ?? item.description ?? '',
                de: de?.description ?? item.description ?? '',
            },
            image: buildAssetUrl(url, item.image) ?? '',
        };
    });
});

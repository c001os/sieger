import type { DirectusAllergen, DirectusTranslation } from '~~/server/utils/directus';

function getTranslation(translations: DirectusTranslation[], code: string) {
    return translations.find((t) => t.languages_code === code);
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusAllergen[] }>(
        `${url}/items/allergens`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,code,name,sort,translations.languages_code,translations.name',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
            },
        }
    );

    return data.map((item) => {
        const en = getTranslation(item.translations, 'en-US');
        const de = getTranslation(item.translations, 'de-DE');

        return {
            code: item.code,
            hu: item.name,
            en: en?.name ?? item.name,
            de: de?.name ?? item.name,
        };
    });
});

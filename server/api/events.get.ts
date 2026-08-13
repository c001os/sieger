import type { DirectusEvent, DirectusTranslation } from '~/server/utils/directus';

function getTranslation(translations: DirectusTranslation[], code: string) {
    return translations.find((t) => t.languages_code === code);
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusEvent[] }>(
        `${url}/items/events`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,title,date,time,description,image,featured,button_label,button_type,button_to,sort,translations.languages_code,translations.title,translations.description',
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
            title: {
                hu: item.title,
                en: en?.title ?? item.title,
                de: de?.title ?? item.title,
            },
            date: {
                hu: item.date ?? '',
                en: item.date ?? '',
                de: item.date ?? '',
            },
            time: item.time ?? '',
            description: {
                hu: item.description ?? '',
                en: en?.description ?? item.description ?? '',
                de: de?.description ?? item.description ?? '',
            },
            image: item.image ? `${url}/assets/${item.image}` : '',
            featured: item.featured,
            button: {
                label: item.button_label ?? '',
                type: item.button_type ?? '',
                to: item.button_to ?? '',
            },
        };
    });
});

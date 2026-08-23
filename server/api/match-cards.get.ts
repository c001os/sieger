import type { DirectusMatchCard } from '~~/server/utils/directus';

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusMatchCard[] }>(
        `${url}/items/match_cards`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,team1_name,team1_color,team2_name,team2_color,time,date,sort',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
            },
        }
    );

    return data.map((item) => ({
        id: item.id,
        team1: {
            name: item.team1_name ?? '',
            color: item.team1_color ?? '',
        },
        team2: {
            name: item.team2_name ?? '',
            color: item.team2_color ?? '',
        },
        time: item.time ?? '',
        date: {
            hu: item.date ?? '',
            en: item.date ?? '',
            de: item.date ?? '',
        },
    }));
});

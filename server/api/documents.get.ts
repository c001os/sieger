interface DirectusDocument {
    id: number;
    title: string;
    slug: string;
    sort: number;
    visible: boolean | number;
    file: string | null;
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusDocument[] }>(
        `${url}/items/documents`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,title,slug,sort,visible,file',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
            },
        }
    );

    return data
        .map((item) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            sort: item.sort,
            url: item.file ? `${url}/assets/${item.file}` : '',
        }))
        .filter((item) => item.url);
});

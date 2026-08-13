interface DirectusGalleryImage {
    id: number;
    sort: number;
    visible: boolean | number;
    image: string | null;
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusGalleryImage[] }>(
        `${url}/items/gallery_images`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            query: {
                fields: 'id,sort,visible,image',
                sort: 'sort',
                filter: JSON.stringify({ visible: { _eq: true } }),
            },
        }
    );

    return data
        .map((item) => ({
            id: item.id,
            sort: item.sort,
            url: item.image ? `${url}/assets/${item.image}` : '',
        }))
        .filter((item) => item.url);
});

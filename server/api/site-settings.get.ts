interface DirectusSiteSettings {
    id: number;
    phone: string | null;
    email: string | null;
    address: string | null;
    facebook_url: string | null;
    instagram_url: string | null;
    online_booking_url: string | null;
    map_embed_url: string | null;
    opening_hours_monday: string | null;
    opening_hours_tuesday: string | null;
    opening_hours_wednesday: string | null;
    opening_hours_thursday: string | null;
    opening_hours_friday: string | null;
    opening_hours_saturday: string | null;
    opening_hours_sunday: string | null;
    copyright_text: string | null;
    footer_tagline: string | null;
    privacy_page: string | null;
}

interface OpeningHoursItem {
    day: string;
    schemaDay: string;
    label: string | null;
    open: string | null;
    close: string | null;
}

const DAY_FIELDS: Array<{ key: string; schemaDay: string }> = [
    { key: 'monday', schemaDay: 'Monday' },
    { key: 'tuesday', schemaDay: 'Tuesday' },
    { key: 'wednesday', schemaDay: 'Wednesday' },
    { key: 'thursday', schemaDay: 'Thursday' },
    { key: 'friday', schemaDay: 'Friday' },
    { key: 'saturday', schemaDay: 'Saturday' },
    { key: 'sunday', schemaDay: 'Sunday' },
];

/** "11:00 – 17:00" → { label, open, close }; üres/zárva → { label: null, open: null, close: null } */
function parseHours(
    value: string | null | undefined
): { label: string | null; open: string | null; close: string | null } {
    if (!value) {
        return { label: null, open: null, close: null };
    }
    const match = value.match(/^(\d{2}:\d{2})\s*[–-]\s*(\d{2}:\d{2})$/);
    if (!match) {
        return { label: value, open: null, close: null };
    }
    return {
        label: value,
        open: match[1] ?? null,
        close: match[2] === '00:00' ? '23:59' : (match[2] ?? null),
    };
}

export default defineEventHandler(async (event) => {
    const { url, token } = getDirectusConfig(event);

    const { data } = await $fetch<{ data: DirectusSiteSettings }>(
        `${url}/items/site_settings`,
        {
            headers: { Authorization: `Bearer ${token}` },
            query: {
                fields: [
                    'id',
                    'phone',
                    'email',
                    'address',
                    'facebook_url',
                    'instagram_url',
                    'online_booking_url',
                    'map_embed_url',
                    'opening_hours_monday',
                    'opening_hours_tuesday',
                    'opening_hours_wednesday',
                    'opening_hours_thursday',
                    'opening_hours_friday',
                    'opening_hours_saturday',
                    'opening_hours_sunday',
                    'copyright_text',
                    'footer_tagline',
                    'privacy_page',
                ],
            },
        }
    );

    const openingHours: OpeningHoursItem[] = DAY_FIELDS.map(({ key, schemaDay }) => {
        const settings = data as unknown as Record<string, string | null>;
        return {
            day: key,
            schemaDay,
            ...parseHours(settings[`opening_hours_${key}`]),
        };
    });

    return {
        ...data,
        openingHours,
        openingHoursSpecification: openingHours
            .filter((item) => item.open && item.close)
            .map((item) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: item.schemaDay,
                opens: item.open,
                closes: item.close,
            })),
    };
});

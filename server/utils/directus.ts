import type { H3Event } from 'h3';

export interface DirectusTranslation {
    languages_code: string;
    name?: string;
    description?: string;
    title_top?: string;
    title_bottom?: string;
}

export interface DirectusFile {
    id: string;
}

export interface DirectusSpecialOffer {
    id: number;
    name: string;
    description: string;
    image: DirectusFile | null;
    translations: DirectusTranslation[];
}

export interface DirectusDrinkSpecial {
    id: number;
    type: 'image' | 'text';
    title_top: string | null;
    title_bottom: string | null;
    description: string | null;
    image: DirectusFile | null;
    translations: DirectusTranslation[];
}

export interface DirectusStarting11Item {
    id: number;
    name: string;
    description: string;
    price: string;
    position_top: string;
    position_left: string;
    is_substitute: boolean | number;
    sort: number;
    visible: boolean | number;
    logo_image: DirectusFile | null;
    food_image: DirectusFile | null;
    translations: DirectusTranslation[];
}

export interface DirectusAllergen {
    id: number;
    code: string;
    name: string;
    sort: number;
    visible: boolean | number;
    translations: DirectusTranslation[];
}

export interface DirectusEvent {
    id: number;
    title: string;
    date: string | null;
    time: string | null;
    description: string | null;
    image: string | null;
    featured: boolean | number;
    button_label: string | null;
    button_type: 'route' | 'external' | 'pdf' | null;
    button_to: string | null;
    sort: number;
    visible: boolean | number;
    translations: DirectusTranslation[];
}

export interface DirectusWeeklyMenu {
    id: number;
    week: string | null;
    text: string | null;
    price: string | null;
    image: string | null;
    sort: number;
    visible: boolean | number;
    translations: DirectusTranslation[];
}

export interface DirectusMatchCard {
    id: number;
    team1_name: string | null;
    team1_color: string | null;
    team2_name: string | null;
    team2_color: string | null;
    time: string | null;
    date: string | null;
    sort: number;
    visible: boolean | number;
}

const LANGUAGE_MAP: Record<string, string> = {
    en: 'en-US',
    de: 'de-DE',
};

export function getDirectusConfig(event: H3Event) {
    const config = useRuntimeConfig(event);
    const url = config.public.directusUrl as string | undefined;
    const token = config.directusToken as string | undefined;

    if (!url || !token) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Directus URL or token is not configured',
        });
    }

    return { url, token };
}

export function getDirectusLanguageCode(locale: string): string | null {
    return LANGUAGE_MAP[locale] || null;
}

export function translateField(
    item: { translations: DirectusTranslation[] },
    locale: string,
    fields: Array<keyof DirectusTranslation>
): Record<string, string> {
    const result: Record<string, string> = {};
    const langCode = getDirectusLanguageCode(locale);
    const translation = langCode
        ? item.translations.find((t) => t.languages_code === langCode)
        : undefined;

    for (const field of fields) {
        const fallback = (item as Record<string, any>)[field] as string | null | undefined;
        const value = translation?.[field] ?? fallback ?? '';
        result[field] = value;
    }

    return result;
}

export function buildAssetUrl(baseUrl: string, file: DirectusFile | null | undefined): string | null {
    if (!file?.id) return null;
    return `${baseUrl}/assets/${file.id}`;
}

const fs = require('fs');

const TOKEN = 'JlYnFZSEpBXHMqICNO0B_bXVsMslwDJe';
const URL = 'https://sieger-admin.previsionlab.hu';

async function directus(path, options = {}) {
    const res = await fetch(`${URL}${path}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Directus error ${res.status}: ${text}`);
    }
    return res.json();
}

async function getCategories(collection) {
    const { data } = await directus(`/items/${collection}?fields=id,name&filter[visible][_eq]=true&limit=-1`);
    const map = {};
    for (const cat of data) {
        map[cat.name] = cat.id;
    }
    return map;
}

async function uploadItems(items, collection, categoryMap) {
    const payload = items.map((item, index) => ({
        name: item.hu,
        description: '',
        price: (item.prices || []).join(', '),
        category: categoryMap[item.categoryHu],
        sort: index + 1,
        visible: true,
    }));
    const { data } = await directus(`/items/${collection}`, {
        method: 'POST',
        body: JSON.stringify(payload),
    });
    return data.length;
}

async function main() {
    const menu = JSON.parse(fs.readFileSync('/tmp/menu-data.json', 'utf8'));
    const drinks = JSON.parse(fs.readFileSync('/tmp/drinks-data.json', 'utf8'));

    console.log('Loading food categories...');
    const foodCategoryMap = await getCategories('food_categories');
    console.log('Loading drink categories...');
    const drinkCategoryMap = await getCategories('drink_categories');

    const foodItems = [];
    for (const cat of menu.categories) {
        for (const item of cat.items) {
            foodItems.push({ ...item, categoryHu: cat.hu });
        }
    }

    const drinkItems = [];
    for (const cat of drinks.categories) {
        for (const item of cat.items) {
            drinkItems.push({ ...item, categoryHu: cat.hu });
        }
    }

    console.log(`Uploading ${foodItems.length} food items...`);
    const foodCount = await uploadItems(foodItems, 'food_items', foodCategoryMap);
    console.log(`Uploaded ${foodCount} food items`);

    console.log(`Uploading ${drinkItems.length} drink items...`);
    const drinkCount = await uploadItems(drinkItems, 'drink_items', drinkCategoryMap);
    console.log(`Uploaded ${drinkCount} drink items`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

const axios = require("axios");

const BASE_URL = "https://api.mercadolibre.com";
const author = { name: "Luis Adolfo", lastname: "Cataño hoyos" };

const serializeItem = (item) => {
    if (!item) return {};
    const fullPrice = item?.price?.toString().split(".");
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: Number(fullPrice[0]),
            decimals: Number(fullPrice[1]) || 0,
        },
        picture: !item.pictures?.length ? item.thumbnail : item.pictures[0].url,
        condition: item.condition,
        free_shipping: item?.shipping?.free_shipping,
        state_name: item?.address?.state_name,
    };
};

const orderByCategory = (items) =>
    Array.from(
        items.reduce(
            (map, item) => (map.get(item.category_id).count++, map),
            new Map(items.map((o) => [o.category_id, Object.assign({}, o, { count: 0 })])),
        ),
        ([k, o]) => o,
    )
        .sort((a, b) => b.count - a.count)
        .map((o) => o.category_id);

const getCategories = async (categoryId) => {
    if (categoryId && typeof categoryId !== "string") return [];
    const responseCategories = await axios.get(`${BASE_URL}/categories/${categoryId}`);
    return (responseCategories?.data?.path_from_root || []).map((category) => category.name);
};

const getSearch = async (query) => {
    try {
        if (!query) return {};
        const response = await axios.get(encodeURI(`${BASE_URL}/sites/MLA/search?q=​${query}`));
        const results = response?.data?.results || [];
        const items = results.map((item) => serializeItem(item)).sort((a, b) => a["title"].localeCompare(b["title"]));
        const firstCategory = orderByCategory(results)[0] || null;
        const categories = await getCategories(firstCategory);
        return { author, categories, items };
    } catch (error) {
        console.error(error);
    }
};

const getItem = async (id) => {
    try {
        if (!id) return {};
        const responseItem = await axios.get(`${BASE_URL}/items/${id}`);
        const responseDescription = await axios.get(`${BASE_URL}/items/${id}/description`);
        const categories = await getCategories(responseItem?.data?.category_id);
        const item = serializeItem(responseItem?.data);
        return {
            author,
            item: {
                ...item,
                sold_quantity: Number(responseItem?.data?.sold_quantity) || 0,
                description: responseDescription?.data?.plain_text || "",
            },
            categories,
        };
    } catch (error) {
        console.error(error);
    }
};

module.exports = { getSearch, getItem };

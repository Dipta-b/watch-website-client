export const sortWatches = (watches, sortType) => {
    if (!watches) return [];
    const sorted = [...watches];

    switch (sortType) {
        case "priceLowToHigh": sorted.sort((a, b) => a.price - b.price);
            break;
        case "priceHighToLow": sorted.sort((a, b) => b.price - a.price);
            break;
        case "newest":
            sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
            break;
        default:
            break;
    }
    return sorted;
}
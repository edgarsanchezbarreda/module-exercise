const choice = (items) => {
    let idx = Math.floor(Math.random * items.length);
    return items[idx];
};

const remove = (items, item) => {
    const foundItem = items.find((i) => i === item);
    return foundItem;
};

export { choice, remove };

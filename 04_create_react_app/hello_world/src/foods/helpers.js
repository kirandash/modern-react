const choice = (items) => {
    // return a random item from array
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

const remove = (items, item) => {
    // remove a specific item from array and return new array
    for (let i=0; i<items.length; i++) {
        if(items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };

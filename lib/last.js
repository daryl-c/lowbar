module.exports = function last (list, amount) {
    if (!Array.isArray(list)) {
        return;
    }
    if (!amount && amount !== 0) {
        return list[list.length - 1];
    }
    const start = list.length - amount > -1 ? list.length - amount : 0;
    return list.slice(start, list.length);
};

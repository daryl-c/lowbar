module.exports = function last (list, amount) {
    if (!Array.isArray(list)) {
        return;
    }
    if (!amount && amount !== 0) {
        return list[list.length - 1];
    }
    return list.slice(list.length - amount, list.length);
};

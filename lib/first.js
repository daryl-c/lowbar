module.exports = function first (list, end) {
    if (!Array.isArray(list)) {
        return [];
    }
    return end ? list.slice(0, end) : list[0];
};

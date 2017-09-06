module.exports = function first (list) {
    if (!Array.isArray(list)) {
        return [];
    }
    return list[0];
};

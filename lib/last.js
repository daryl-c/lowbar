module.exports = function last (list, amount) {
    if (!list) return;
    if (!amount) return list[list.length - 1];

    const start = Math.max(list.length - amount, 0);
    if (typeof list === 'string') {
        list = list.split('');
    }
    return list.slice(start, list.length);
};

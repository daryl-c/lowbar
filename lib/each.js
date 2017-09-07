module.exports = function each (list, iteratee, context) {
    context = context || this;

    if (list && list.length) {
        for (let i = 0; i < list.length; i++) {
            iteratee.call(context, list[i], i, list);
        }
    } else if (typeof list === 'object') {
        for (let key in list) {
            iteratee.call(context, list[key], key, list);
        }
    }
    return list;
};

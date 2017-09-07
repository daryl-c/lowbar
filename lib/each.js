module.exports = function each (list, iteratee, context) {
    iteratee = context ? iteratee.bind(context) : iteratee;
    if (list.length) {
        for (let i = 0; i < list.length; i++) {
            iteratee(list[i], i, list);
        }
    } else if (typeof list === 'object') {
        for (let key in list) {
            iteratee(list[key], key, list);
        }
    }
};

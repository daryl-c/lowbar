module.exports = function each (list, iteratee, context) {
    iteratee = context ? iteratee.bind(context) : iteratee;
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            iteratee(list[i], i, list);
        }
    }
    if (typeof list === 'object' && !Array.isArray(list)) {
        for (let key in list) {
            iteratee(list[key], key, list);
        }
    }

};

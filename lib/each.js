module.exports = function each (list, iteratee, context) {
    iteratee = context ? iteratee.bind(context) : iteratee;
    for (let i = 0; i < list.length; i++) {
        iteratee(list[i], i, list);
    }
};

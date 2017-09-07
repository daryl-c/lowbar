module.exports = function each (list, iteratee) {
    for (let i = 0; i < list.length; i++) {
        iteratee();
    }
};

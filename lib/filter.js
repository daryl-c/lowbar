const each = require('./each');

module.exports = function filter (list, predicate) {
    const res = [];
    each(list, (ele, i) => {
        if (predicate(ele, i, list)) {
            res.push(ele);
        }
    });
    return res;
};

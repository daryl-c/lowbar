const each = require('./each');

module.exports = function filter (list, predicate, context) {
    const res = [];
    context = context || this;
    each(list, (ele, i) => {
        if (predicate.call(context, ele, i, list)) {
            res.push(ele);
        }
    });
    return res;
};

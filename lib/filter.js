const each = require('./each');

module.exports = function filter (list, predicate) {
    each(list, predicate);
    return [];
};

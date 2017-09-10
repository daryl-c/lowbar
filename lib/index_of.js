const each = require('./each');

module.exports = function (list, value) {
    let index = -1;
    each(list, (ele, i) => {
        if (ele === value) {
            index = i;
        }
    });
    return index;
};

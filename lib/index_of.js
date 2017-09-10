const each = require('./each');

module.exports = function (list, value) {
    let index = -1;
    each(list, (ele, i) => {
        if (index === -1 && ele === value) {
            index = i;
        }
    });
    return index;
};

const each = require('./each');

module.exports = function (list, value, isSorted) {
    let index = -1;
    let startPos = typeof isSorted === 'number' ? isSorted : 0;
    
    each(list, (ele, i) => {
        if (index !== -1 || i < startPos) {
            return;
        }
        if (ele === value) {
            index = i;
        }
    });
    return index;
};

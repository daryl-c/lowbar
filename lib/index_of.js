const each = require('./each');
const binarySearch = require('../utils/binary_search');

module.exports = function (list, value, isSorted) {
    let index = -1;
    let startPos = typeof isSorted === 'number' ? isSorted : 0;
    
    if (isSorted === true) {
        return binarySearch(list, value);
    }

    if (typeof list === 'object' && !Array.isArray(list)) {
        return -1;
    }

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

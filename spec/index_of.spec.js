const {indexOf} = require('../lib');
const {expect} = require('chai');

describe('indexOf()', () => {
    it('should be a function', () => {
        expect(indexOf).to.be.a('function');
    });
    it('should return the correct index if given value is present', () => {
        const arr = [1, 2, 3, 4, 5];
        const expected = 3;
        const actual = indexOf(arr, 4);
        expect(actual).to.equal(expected);
    });
    it('should return the first index if given value is present in multiple places', () => {
        const arr = [1, 2, 3, 2, 5];
        const expected = 1;
        const actual = indexOf(arr, 2);
        expect(actual).to.equal(expected);
    });
});

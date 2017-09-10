const {indexOf} = require('../../lib');
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
    it('should return -1 if value is not present in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const expected = -1;
        const actual = indexOf(arr, 9);
        expect(actual).to.equal(expected);
    });
    it('starts search from the position given as third argument', () => {
        const arr = [1, 2, 3, 2, 5];
        const expected = 3;
        const actual = indexOf(arr, 2, 2);
        expect(actual).to.equal(expected);
    });
    it('uses binary search if true is passed as 3rd argument', () => {
        var unsortedArr = [1, 2, 7, 6, 6, 8, 8, 9, 9];
        var sortedArr = unsortedArr.slice().sort();

        const expectedUnsorted = -1;
        const expectedSorted = 4;

        const actualUnsorted = indexOf(unsortedArr, 7, true);
        const actualSorted = indexOf(sortedArr, 7, true);

        expect(actualUnsorted).to.equal(expectedUnsorted);
        expect(actualSorted).to.equal(expectedSorted);
    });
}); 

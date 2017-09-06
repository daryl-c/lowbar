const {last} = require('../lib');
const {expect} = require('chai');

describe('first()', () => {
    it('should be a function', () => {
        expect(last).to.be.a('function');
    });

    it('returns undefined if list is not array or string', () => {
        const expected = undefined;
        expect(last(12)).to.eql(expected);
        expect(last(null)).to.eql(expected);
        expect(last(true)).to.eql(expected);
        expect(last(false)).to.eql(expected);
    });

    it('returns the last item of an array if no amount value argument', () => {
        var actual = last([1, 2, 3]);
        var expected = 3;
        expect(actual).to.equal(expected);
    });

    it('returns undefined if list is undefined and no amount value argument', () => {
        var actual = last([]);
        var expected = undefined;
        expect(actual).to.equal(expected);
    });

    it('returns an array containing last n elements in list according to amount value', () => {
        var actual = last([1, 2, 3, 4, 5], 2);
        var expected = [4, 5];
        expect(actual).to.eql(expected);
    });

    it('returns an array of all elements if amount value is bigger than list length', () => {
        var actual = last([1, 2, 3, 4, 5], 8);
        var expected = [1, 2, 3, 4, 5];
        expect(actual).to.eql(expected);
    });
});

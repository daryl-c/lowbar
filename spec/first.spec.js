const {first} = require('../lib');
const {expect} = require('chai');

describe('first()', () => {
    it('should be a function', () => {
        expect(first).to.be.a('function');
    });
    it('returns an empty array if input is not array', () => {
        const expected = [];
        expect(first(12)).to.eql(expected);
        expect(first(null)).to.eql(expected);
        expect(first(true)).to.eql(expected);
        expect(first(false)).to.eql(expected);
        expect(first('abc')).to.eql(expected);
    });
    it('returns the first item of an array if no end value argument', () => {
        var actual = first([1, 2, 3]);
        var expected = 1;
        expect(actual).to.equal(expected);
    });
    it('returns the first elements of an array up to the end value', () => {
        var actual = first([1, 2, 3, 4, 5], 3);
        var expected = [1, 2, 3];
        expect(actual).to.eql(expected);
    });
});

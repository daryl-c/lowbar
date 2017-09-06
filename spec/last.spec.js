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
    it('returns the last item of an array if no end value argument', () => {
        var actual = last([1, 2, 3]);
        var expected = 3;
        expect(actual).to.equal(expected);
    });
});

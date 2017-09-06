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
});

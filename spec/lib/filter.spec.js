const {filter} = require('../../lib');
const {expect} = require('chai');

describe('filter()', () => {
    it('should be a function', () => {
        expect(filter).to.be.a('function');
    });
    it('returns a new array', () => {
        const input = [1, 2, 3];
        const allTrue = () => true;
        const actual = filter(input, allTrue);
        expect(actual).to.be.an('array');
        expect(actual).to.not.equal(input);
    });
});

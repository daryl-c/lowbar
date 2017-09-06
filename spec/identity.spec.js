const {expect} = require('chai');
const {identity} = require('../lib');

describe('identity()', () => {
    it('should be a function', () => {
        expect(identity).to.be.a('function');
    });
    it('returns same argument it is called with for primitives', () => {
        expect(identity(1)).to.equal(1);
        expect(identity('a')).to.equal('a');
        expect(identity(true)).to.equal(true);
    });
});

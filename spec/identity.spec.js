const {expect} = require('chai');
const {identity} = require('../lib');

describe('identity()', () => {
    it('should be a function', () => {
        expect(identity).to.be.a('function');
    });
});

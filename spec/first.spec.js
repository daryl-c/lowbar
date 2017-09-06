const {first} = require('../lib');
const {expect} = require('chai');

describe('first()', () => {
    it('should be a function', () => {
        expect(first).to.be.a('function');
    });
});

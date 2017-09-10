const {filter} = require('../../lib');
const {expect} = require('chai');

describe('filter()', () => {
    it('should be a function', () => {
        expect(filter).to.be.a('function');
    });
});

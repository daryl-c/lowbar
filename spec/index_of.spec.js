const {indexOf} = require('../lib');
const {expect} = require('chai');

describe('indexOf()', () => {
    it('should be a function', () => {
        expect(indexOf).to.be.a('function');
    });
});

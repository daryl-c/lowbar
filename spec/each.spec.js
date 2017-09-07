const {each} = require('../lib');
const {expect} = require('chai');

describe('first()', () => {
    it('should be a function', () => {
        expect(each).to.be.a('function');
    });
});

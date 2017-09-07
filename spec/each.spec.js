const {each} = require('../lib');
const {expect} = require('chai');
const {spy} = require('sinon');

describe('first()', () => {
    it('should be a function', () => {
        expect(each).to.be.a('function');
    });
    describe('arrays', () => {
        it('calls the iteratee for every item in an array', () => {
            const fakeFn = spy();
            each([1, 2, 3, 4, 5], fakeFn);
            const expected = 5;
            const actual = fakeFn.callCount;
            expect(actual).to.equal(expected);
        });
    });
});

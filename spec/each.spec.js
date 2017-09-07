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
        it('invokes iteratee with the item, it\'s index and the array', () => {
            const fakeFn = spy();
            const list = [1, 2, 3, 4, 5];
            each(list, fakeFn);
            list.forEach((item, i, arr) => {
                const actual = fakeFn.calledWith(item, i, arr);
                const expected = true;
                expect(actual).to.equal(expected);
            });
        });
    });
});

const {each} = require('../lib');
const {expect} = require('chai');
const {spy} = require('sinon');

describe('each()', () => {
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
        it('invokes iteratee with a different context if given', () => {
            const context = {};
            const list = [1, 2, 3, 4, 5];
            function checkContext() {
                expect(this).to.equal(context);
            }
            each(list, checkContext, context);
        });
    });
    describe('objects', () => {
        let obj;
        beforeEach(() => {
            obj = {
                a: 1, b: 2, c: 3, d: 4, e: 5
            };
        });
        it('calls the iteratee for every item in an object', () => {
            const fakeFn = spy();
            each(obj, fakeFn);
            const expected = 5;
            const actual = fakeFn.callCount;
            expect(actual).to.equal(expected);
        });
        it('invokes iteratee with the item, it\'s index and the object', () => {
            const fakeFn = spy();
            each(obj, fakeFn);
            Object.keys(obj).forEach(key => {
                const actual = fakeFn.calledWith(obj[key], key, obj);
                const expected = true;
                expect(actual).to.equal(expected);
            });
        });
        it('invokes iteratee with a different context if given', () => {
            const context = {};
            function checkContext() {
                expect(this).to.equal(context);
            }
            each(obj, checkContext, context);
        });
    });
    describe('strings', () => {
        let str;
        beforeEach(() => {
            str = 'Test String';
        });
        it('calls the iteratee for every char in string', () => {
            const fakeFn = spy();
            each(str, fakeFn);
            const expected = 11;
            const actual = fakeFn.callCount;
            expect(actual).to.equal(expected);
        });
    });
});

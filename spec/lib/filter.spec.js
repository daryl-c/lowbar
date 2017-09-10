const {filter} = require('../../lib');
const {expect} = require('chai');
const sinon = require('sinon');

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
    it('returns empty array if predicate is not a function', () => {
        const input = [1, 2, 3];
        const actual = filter(input, 'not a function');
        expect(actual).to.eql([]);
    });
    describe('arrays', () => {
        it('invokes the predicate for every item in array', () => {
            const input = ['a', 'b', 'c'];
            const spy = sinon.spy();
            filter(input, spy);
            expect(spy.callCount).to.equal(input.length);
        });
        it('invokes predicate with each item, ', () => {
            const input = ['a', 'b', 'c'];
            const spy = sinon.spy();
            filter(input, spy);
            input.forEach((letter, i) => {
                expect(spy.calledWith(letter, i, input)).to.be.true;
            });
        });
        it('returns an array of all items where predicate is true', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const isEven = (num) => !(num % 2);
            const actual = filter(input, isEven);
            const expected = [2, 4, 6];
            expect(actual).to.eql(expected);
        });
        it('invokes the predicate with a context if provided', () => {
            const input = [1, 2, 3, 4, 5, 6];
            const context = {};
            const testContext = function () {
                expect(this).to.equal(context);
            };
            filter(input, testContext, context);
        });
    });
    describe('objects', () => {
        it('invokes the predicate for every item in the object', () => {
            const input = {
                a: 1, 
                b: 'a', 
                c: 2
            };
            const spy = sinon.spy();
            const expected = Object.keys(input).length;
            filter(input, spy);
            expect(spy.callCount).to.equal(expected);
        });
        it('invokes predicate with each item, ', () => {
            const input = {
                a: 1, 
                b: 'a', 
                c: 2
            };
            const spy = sinon.spy();
            filter(input, spy);
            Object.keys(input).forEach((key) => {
                expect(spy.calledWith(input[key], key, input)).to.be.true;
            });
        });
    });
});

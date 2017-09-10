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
    });
});

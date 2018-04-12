import { cost } from './cost';

/**
 * https://www.hackerrank.com/challenges/sherlock-and-cost/problem
 */

describe('cost', () => {
    it('should give the correct answer', () => {
        expect(cost([10, 1, 10, 1, 10])).toBe(36);
    });

    it('should give the correct answer', () => {
        expect(cost([1, 10, 1, 10, 1])).toBe(36);
    });

    it('should give the correct answer', () => {
        expect(cost([5, 7, 3, 1])).toBe(12);
    });

    it('should give the correct answer', () => {
        expect(cost([100, 2, 100, 2, 100])).toBe(396);
    });
});

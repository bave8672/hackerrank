import { getWays } from './getWays';

/**
 * https://www.hackerrank.com/challenges/coin-change/problem
 */

describe('coin change problem', () => {
    it('should handle the null case', () => {
        expect(getWays(100, [])).toBe(0);
    });

    it('should handle case the where no combinations are possible', () => {
        expect(getWays(0, [1, 2, 3, 4, 5])).toBe(0);
    });

    it('should get the correct amount 1', () => {
        expect(getWays(1, [1])).toBe(1);
    });

    it('should get the correct amount 2', () => {
        expect(getWays(2, [1, 2])).toBe(2);
    });

    it('should get the correct amount 3', () => {
        expect(getWays(3, [1])).toBe(1);
    });

    it('should get the correct amount 4', () => {
        expect(getWays(3, [1, 2])).toBe(2);
    });

    it('should get the correct amount 5', () => {
        expect(getWays(3, [1, 2, 3])).toBe(3);
    });

    it('should get the correct amount 5', () => {
        expect(getWays(5, [1, 2])).toBe(3);
    });

    it('should get the correct amount 6', () => {
        expect(getWays(10, [2, 5, 3, 6])).toBe(5);
    });

    it('should get the correct amount 7', () => {
        expect(getWays(4, [1, 2, 3])).toBe(4);
    });
});

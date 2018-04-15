/**
 * https://www.hackerrank.com/challenges/construct-the-array/problem
 */
import { countArray } from './countArray';

describe('count array', () => {
    it('should give the correct result', () => {
        expect(countArray(4, 3, 2)).toBe(3);
    });

    it('should give the correct result', () => {
        expect(countArray(4, 4, 2)).toBe(7);
    });

    it('should give the correct result', () => {
        expect(countArray(5, 3, 2)).toBe(5);
    });
});

import { distinct } from '../../utils/distinct';
import { memoize } from '../../utils/memoize';

/**
 * https://www.hackerrank.com/challenges/coin-change/problem
 */

export const getWays = memoize((n: number, c: number[], recursing = false): number => {
    // recursive termination
    if (n === 0 && recursing) {
        return 1;
    }

    // null case
    if (n < 0) {
        return 0;
    }

    // recursive termination / null case
    if (!c.length) {
        return 0;
    }

    /**
     * Recursive solution:
     * ways(n, c) = ways(n - c[m], c) + ways(n, c[...m-1])
     *
     * ie:
     * (1) you use one less kind of coins, and still achieve this sum. OR
     * (2) you still use the same set of coins, but achieve (sum-oneCoinValue).
     */
    const coinM = c[0];
    return getWays(n - coinM, c, true) + getWays(n, c.slice(1));
});

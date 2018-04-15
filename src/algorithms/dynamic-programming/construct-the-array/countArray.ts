import { ModularArithmetic } from '../../../utils/mod';

/**
 * https://www.hackerrank.com/challenges/construct-the-array/problem
 */

const mod = new ModularArithmetic(1e9 + 7);

function countArray(n: number, k: number, x: number): number {
    if (n === 2 && k === 2) {
        return 0;
    }

    if (n === 2) {
        return 1;
    }

    const pow = mod.pow(k - 1, n - 2);
    const nminus1 = countArray(n - 1, k, x);
    const result = mod.sub(pow, nminus1);

    return result;
}

export { countArray };

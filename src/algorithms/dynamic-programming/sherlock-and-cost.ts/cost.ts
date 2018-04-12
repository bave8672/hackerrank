/**
 * https://www.hackerrank.com/challenges/sherlock-and-cost/problem
 */

const { max } = Math;

export const cost = (arr: number[]): number => {
    let high = 0;
    let low = 0;

    for (let i = 1; i < arr.length; i++) {
        const lowToHigh = arr[i] - 1;
        const highToLow = arr[i - 1] - 1;
        const highNext = max(high, low + lowToHigh);
        const lowNext = max(low, high + highToLow);
        high = highNext;
        low = lowNext;
    }

    return max(high, low);
};

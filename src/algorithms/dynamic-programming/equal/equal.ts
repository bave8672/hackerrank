import { memoize } from '../../../utils/memoize';

export const equal = (arr: number[]): number => {
    const min = Math.min(...arr);
    return Math.min(
        ...[0, 1, 2, 3, 4].map(offset =>
            arr.reduce((sum, x) => sum + getOperations(x - min + offset), 0),
        ),
    );
};

export const getOperations = memoize((n: number): number => {
    let result = Math.floor(n / 10) * 2;
    switch (n % 10) {
        case 1:
        case 2:
        case 5:
            result += 1;
            break;
        case 3:
        case 4:
        case 6:
        case 7:
            result += 2;
            break;
        case 8:
        case 9:
            result += 3;
            break;
    }
    return result;
});

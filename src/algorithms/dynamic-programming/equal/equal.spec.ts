import { equal, getOperations } from './equal';

/**
 * https://www.hackerrank.com/challenges/equal/problem
 */

describe('equal -- should get the number of addition operations required to equalize an array', () => {
    it('should give the correct result', () => {
        expect(equal([2, 2, 3, 7])).toBe(2);
    });

    it('should give the correct result', () => {
        expect(equal([10, 7, 12])).toBe(3);
    });

    it('should give the correct result', () => {
        expect(equal([0, 1, 1])).toBe(2);
    });

    it('should give the correct result', () => {
        expect(equal([])).toBe(0);
    });

    it('should give the correct result', () => {
        expect(equal([10, 10, 10, 10])).toBe(0);
    });

    it('should give the correct result', () => {
        expect(equal([3, 7, 7])).toBe(3);
    });

    it('should give the correct result', () => {
        expect(equal([1, 5, 5])).toBe(3);
    });

    it('should give the correct result', () => {
        expect(
            equal([
                53,
                361,
                188,
                665,
                786,
                898,
                447,
                562,
                272,
                123,
                229,
                629,
                670,
                848,
                994,
                54,
                822,
                46,
                208,
                17,
                449,
                302,
                466,
                832,
                931,
                778,
                156,
                39,
                31,
                777,
                749,
                436,
                138,
                289,
                453,
                276,
                539,
                901,
                839,
                811,
                24,
                420,
                440,
                46,
                269,
                786,
                101,
                443,
                832,
                661,
                460,
                281,
                964,
                278,
                465,
                247,
                408,
                622,
                638,
                440,
                751,
                739,
                876,
                889,
                380,
                330,
                517,
                919,
                583,
                356,
                83,
                959,
                129,
                875,
                5,
                750,
                662,
                106,
                193,
                494,
                120,
                653,
                128,
                84,
                283,
                593,
                683,
                44,
                567,
                321,
                484,
                318,
                412,
                712,
                559,
                792,
                394,
                77,
                711,
                977,
                785,
                146,
                936,
                914,
                22,
                942,
                664,
                36,
                400,
                857,
            ]),
        ).toBe(10605);
    });

    it('should give the correct result', () => {
        expect(
            equal([
                512,
                125,
                928,
                381,
                890,
                90,
                512,
                789,
                469,
                473,
                908,
                990,
                195,
                763,
                102,
                643,
                458,
                366,
                684,
                857,
                126,
                534,
                974,
                875,
                459,
                892,
                686,
                373,
                127,
                297,
                576,
                991,
                774,
                856,
                372,
                664,
                946,
                237,
                806,
                767,
                62,
                714,
                758,
                258,
                477,
                860,
                253,
                287,
                579,
                289,
                496,
            ]),
        ).toEqual(5104);
    });
});


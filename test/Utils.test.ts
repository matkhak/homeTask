import {Utils} from "../src/utils";
import {ARRAY_A_BIGGER_ARRAY_B, INVALID_RANGE_LENGTH, INVALID_RANGE_VALUE} from "../src/consts";

describe('test utils functions', () => {

    let message = "invalid value range";

    beforeEach(() => {

        jest.spyOn(console, "error").mockImplementation((e) => {
            message = e;
        });

    });


    it('check isPositiveNumeric', () => {

        expect(Utils.isPositiveNumeric("asd")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric("-1")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric("0")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric("5.")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric("12.3")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric("1,23")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric("10")).toStrictEqual(true);
        expect(Utils.isPositiveNumeric("12n")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric("12f")).toStrictEqual(false);
        expect(Utils.isPositiveNumeric(Math.pow(10, 12) + "")).toStrictEqual(true);

    })

    it('check isFullEnteredValues', () => {

        expect(Utils.isFullEnteredArrayValues([5, 1, 2, 3, 4, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual(true);
        expect(Utils.isFullEnteredArrayValues([5, 1, 2, 3, 4, 5, 10, 1, 1, 1, 1, 1])).toStrictEqual(false);
        expect(Utils.isFullEnteredArrayValues([2, 1, 1, 2, 1])).toStrictEqual(false);
        expect(Utils.isFullEnteredArrayValues([3, 1, 2, 1, 1])).toStrictEqual(false);

    })

    it('check isValidArrayLength', () => {

        expect(Utils.isValidArrayLength(10)).toStrictEqual(true);
        expect(Utils.isValidArrayLength(1)).toStrictEqual(true);
        expect(Utils.isValidArrayLength(0)).toStrictEqual(false);
        expect(Utils.isValidArrayLength(-10)).toStrictEqual(false);
        expect(Utils.isValidArrayLength(Math.pow(10, 6))).toStrictEqual(true);
        expect(Utils.isValidArrayLength(Math.pow(10, 6) + 1)).toStrictEqual(false);

    })

    it('check isValidArrayValue', () => {

        expect(Utils.isValidArrayValue(10)).toStrictEqual(true);
        expect(Utils.isValidArrayValue(1)).toStrictEqual(true);
        expect(Utils.isValidArrayValue(0)).toStrictEqual(false);
        expect(Utils.isValidArrayValue(-10)).toStrictEqual(false);
        expect(Utils.isValidArrayValue(Math.pow(10, 12))).toStrictEqual(true);
        expect(Utils.isValidArrayValue(Math.pow(10, 12) + 1)).toStrictEqual(false);

    })

    it('convert boolean to string', () => {

        expect(Utils.convertBooleanToStr(true)).toStrictEqual("True");
        expect(Utils.convertBooleanToStr(false)).toStrictEqual("False");


    })

    it('check range for entered IntValue from stdin', () => {
        Utils.checkValueFromStdin(Math.pow(10, 7), []);
        expect(message).toStrictEqual(INVALID_RANGE_LENGTH);
    })

    it('check range for entered IntValue from stdin', () => {
        Utils.checkValueFromStdin(Math.pow(10, 11), []);
        expect(message).toStrictEqual(INVALID_RANGE_LENGTH);
    })

    it('check range for entered IntValue from stdin', () => {
        Utils.checkValueFromStdin(Math.pow(10, 13), [3, 1, 2]);
        expect(message).toStrictEqual(INVALID_RANGE_VALUE);
    })

    it('check message error copmare two length of array', () => {

        Utils.compareLengthArrays(10, 5);
        expect(message).toStrictEqual(ARRAY_A_BIGGER_ARRAY_B);

    })


})
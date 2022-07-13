"use strict";
exports.__esModule = true;
var utils_1 = require("../src/utils");
var consts_1 = require("../src/consts");
describe('test utils functions', function () {
    var message = "invalid value range";
    beforeEach(function () {
        jest.spyOn(console, "error").mockImplementation(function (e) {
            message = e;
        });
    });
    it('check isPositiveNumeric', function () {
        expect(utils_1.Utils.isPositiveNumeric("asd")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric("-1")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric("0")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric("5.")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric("12.3")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric("1,23")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric("10")).toStrictEqual(true);
        expect(utils_1.Utils.isPositiveNumeric("12n")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric("12f")).toStrictEqual(false);
        expect(utils_1.Utils.isPositiveNumeric(Math.pow(10, 12) + "")).toStrictEqual(true);
    });
    it('check isFullEnteredValues', function () {
        expect(utils_1.Utils.isFullEnteredArrayValues([5, 1, 2, 3, 4, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual(true);
        expect(utils_1.Utils.isFullEnteredArrayValues([5, 1, 2, 3, 4, 5, 10, 1, 1, 1, 1, 1])).toStrictEqual(false);
        expect(utils_1.Utils.isFullEnteredArrayValues([2, 1, 1, 2, 1])).toStrictEqual(false);
        expect(utils_1.Utils.isFullEnteredArrayValues([3, 1, 2, 1, 1])).toStrictEqual(false);
    });
    it('check isValidArrayLength', function () {
        expect(utils_1.Utils.isValidArrayLength(10)).toStrictEqual(true);
        expect(utils_1.Utils.isValidArrayLength(1)).toStrictEqual(true);
        expect(utils_1.Utils.isValidArrayLength(0)).toStrictEqual(false);
        expect(utils_1.Utils.isValidArrayLength(-10)).toStrictEqual(false);
        expect(utils_1.Utils.isValidArrayLength(Math.pow(10, 6))).toStrictEqual(true);
        expect(utils_1.Utils.isValidArrayLength(Math.pow(10, 6) + 1)).toStrictEqual(false);
    });
    it('check isValidArrayValue', function () {
        expect(utils_1.Utils.isValidArrayValue(10)).toStrictEqual(true);
        expect(utils_1.Utils.isValidArrayValue(1)).toStrictEqual(true);
        expect(utils_1.Utils.isValidArrayValue(0)).toStrictEqual(false);
        expect(utils_1.Utils.isValidArrayValue(-10)).toStrictEqual(false);
        expect(utils_1.Utils.isValidArrayValue(Math.pow(10, 12))).toStrictEqual(true);
        expect(utils_1.Utils.isValidArrayValue(Math.pow(10, 12) + 1)).toStrictEqual(false);
    });
    it('convert boolean to string', function () {
        expect(utils_1.Utils.convertBooleanToStr(true)).toStrictEqual("True");
        expect(utils_1.Utils.convertBooleanToStr(false)).toStrictEqual("False");
    });
    it('check range for entered IntValue from stdin', function () {
        utils_1.Utils.checkValueFromStdin(Math.pow(10, 7), []);
        expect(message).toStrictEqual(consts_1.INVALID_RANGE_LENGTH);
    });
    it('check range for entered IntValue from stdin', function () {
        utils_1.Utils.checkValueFromStdin(Math.pow(10, 11), []);
        expect(message).toStrictEqual(consts_1.INVALID_RANGE_LENGTH);
    });
    it('check range for entered IntValue from stdin', function () {
        utils_1.Utils.checkValueFromStdin(Math.pow(10, 13), [3, 1, 2]);
        expect(message).toStrictEqual(consts_1.INVALID_RANGE_VALUE);
    });
    it('check message error copmare two length of array', function () {
        utils_1.Utils.compareLengthArrays(10, 5);
        expect(message).toStrictEqual(consts_1.ARRAY_A_BIGGER_ARRAY_B);
    });
});

"use strict";
exports.__esModule = true;
exports.Utils = void 0;
var consts_1 = require("./consts");
var Utils = /** @class */ (function () {
    function Utils() {
    }

    Utils.isPositiveNumeric = function (value) {
        return /^[1-9]+[0-9]*$/.test(value);
    };
    Utils.isValidArrayLength = function (value) {
        return Utils.checkValueRange(value, consts_1.MIN_LENGTH_ARRAY, consts_1.MAX_LENGTH_ARRAY, consts_1.INVALID_RANGE_LENGTH);
    };
    Utils.isValidArrayValue = function (value) {
        return Utils.checkValueRange(value, consts_1.MIN_VALUE_ARRAY, consts_1.MAX_VALUE_ARRAY, consts_1.INVALID_RANGE_VALUE);
    };
    Utils.checkValueRange = function (value, min, max, text_error) {
        var result = value < min || value > max;
        if (result)
            console.error(text_error);
        return !result;
    };
    // check full enetered values
    Utils.isFullEnteredArrayValues = function (array) {
        //  check, when length of array A + length of array B + two head of array equal entered array
        return array.length > 0 &&
            array.length > array[0] &&
            array.length > array[array[0] + 1] &&
            array.length == array[0] + array[array[0] + 1] + 2;
    };
    Utils.checkValueFromStdin = function (value, stdinArray) {
        if (stdinArray[0] === undefined) {
            Utils.isValidArrayLength(value);
        } // next length of array check
        else if (stdinArray[0] !== undefined && stdinArray[stdinArray[0]] !== undefined) {
            Utils.isValidArrayLength(value);
            // compare length of arrays
            Utils.compareLengthArrays(stdinArray[0], value);
        } else
            Utils.isValidArrayValue(value);
    };
    Utils.convertBooleanToStr = function (bool) {
        return (bool) ? "True" : "False";
    };
    // length array1 should bigger length array 2
    Utils.compareLengthArrays = function (lengthA, lengthB) {
        if (lengthA > lengthB)
            console.error(consts_1.ARRAY_A_BIGGER_ARRAY_B);
    };
    return Utils;
}());
exports.Utils = Utils;

import {
  ARRAY_A_BIGGER_ARRAY_B,
  INVALID_RANGE_LENGTH,
  INVALID_RANGE_VALUE,
  MAX_LENGTH_ARRAY,
  MAX_VALUE_ARRAY,
  MIN_LENGTH_ARRAY,
  MIN_VALUE_ARRAY,
} from "./consts";

export class Utils {
  static isPositiveNumeric(value: string): boolean {
    return /^[1-9]+[0-9]*$/.test(value);
  }

  static isValidArrayLength(value: number): boolean {
    return Utils.checkValueRange(
      value,
      MIN_LENGTH_ARRAY,
      MAX_LENGTH_ARRAY,
      INVALID_RANGE_LENGTH
    );
  }

  static isValidArrayValue(value: number): boolean {
    return Utils.checkValueRange(
      value,
      MIN_VALUE_ARRAY,
      MAX_VALUE_ARRAY,
      INVALID_RANGE_VALUE
    );
  }

  static checkValueRange(
    value: number,
    min: number,
    max: number,
    text_error: string
  ): boolean {
    const result = value < min || value > max;
    if (result) console.error(text_error);
    return !result;
  }

  // check full enetered values
  static isFullEnteredArrayValues(array: number[]) {
    //  check, when length of array A + length of array B + two head of array equal entered array
    return (
      array.length > 0 &&
      array.length > array[0] &&
      array.length > array[array[0] + 1] &&
      array.length == array[0] + array[array[0] + 1] + 2
    );
  }

  static checkValueFromStdin(value: number, stdinArray: number[]): void {
    if (stdinArray[0] === undefined) {
      Utils.isValidArrayLength(value);
    } // next length of array check and second length is not defined
    else if (
      stdinArray[0] !== undefined &&
      stdinArray[stdinArray[0]] !== undefined &&
      stdinArray[stdinArray[0] + 1] == undefined
    ) {
      Utils.isValidArrayLength(value);
      // compare length of arrays
      Utils.compareLengthArrays(stdinArray[0], value);
    } else Utils.isValidArrayValue(value);
  }

  static convertBooleanToStr(bool: boolean): string {
    return bool ? "True" : "False";
  }

  // length array1 should bigger length array 2
  static compareLengthArrays(lengthA: number, lengthB: number): void {
    if (lengthA > lengthB) console.error(ARRAY_A_BIGGER_ARRAY_B);
  }
}

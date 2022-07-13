"use strict";
exports.__esModule = true;
exports.InputArray = void 0;
var InputArray = /** @class */ (function () {
    function InputArray(length, array) {
        this.length = length;
        this.values = new Map;
        this.setValues(array);
    }

    InputArray.prototype.setValues = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            if (this.values.has(element)) {
                this.values.set(element, this.values.get(element) + 1);
            } else {
                this.values.set(element, 1);
            }
        }
    };
    InputArray.prototype.isCanComposeFromAnotherMap = function (map) {
        for (var _i = 0, _a = Array.from(this.values.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!map.values.has(key) || map.values.get(key) < value) {
                return false;
            }
        }
        return true;
    };
    return InputArray;
}());
exports.InputArray = InputArray;

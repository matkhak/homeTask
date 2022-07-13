"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true, get: function () {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", {enumerable: true, value: v});
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.main = void 0;
var readline = __importStar(require("readline"));
var Utils_1 = require("./Utils");
var InputArray_1 = require("./InputArray");
var consts_1 = require("./consts");
var main = function () {
    var rl = readline.createInterface(process.stdin, process.stdout);
    var arrayFromStdin = [];
    rl.on('line', function (line) {
        // check positive integer
        if (Utils_1.Utils.isPositiveNumeric(line)) {
            var parsedIntLine = parseInt(line, 10);
            // check range
            Utils_1.Utils.checkValueFromStdin(parsedIntLine, arrayFromStdin);
            arrayFromStdin.push(parsedIntLine);
            if (Utils_1.Utils.isFullEnteredArrayValues(arrayFromStdin)) {
                var lengthArrayA = arrayFromStdin[0];
                //+1 - head of array
                var lengthArrayB = arrayFromStdin[arrayFromStdin[0] + 1];
                // split entered array
                var arrayA = arrayFromStdin.slice(1, arrayFromStdin[0] + 1);
                var arrayB = arrayFromStdin.slice(arrayFromStdin[0] + 2);
                var mapA = new InputArray_1.InputArray(lengthArrayA, arrayA);
                var mapB = new InputArray_1.InputArray(lengthArrayB, arrayB);
                // output result
                console.log(Utils_1.Utils.convertBooleanToStr(mapA.isCanComposeFromAnotherMap(mapB)));
                rl.close();
            }
        } else
            console.error(consts_1.TEXT_NOT_POSITIVE);
    });
};
exports.main = main;
(0, exports.main)();

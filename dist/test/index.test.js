"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
exports.__esModule = true;
var mock_stdin_1 = __importDefault(require("mock-stdin"));
var index_1 = require("../src/index");
var consts_1 = require("../src/consts");
console.log = jest.fn();
var stdin;
var result;
var errorMessage;
describe('test main()', function () {
    beforeEach(function () {
        jest.spyOn(console, "log").mockImplementation(function (e) {
            result = e;
        });
        jest.spyOn(console, "error").mockImplementation(function (e) {
            errorMessage = e;
        });
    });
    afterEach(function () {
        result = "";
        errorMessage = "";
    });
    it('case1', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["2", "1", "1", "2", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    });
    it('case2', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["5", "1", "2", "3", "4", "5", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    });
    it('case3', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["5", "1", "2", "3", "4", "5", "10", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("False");
    });
    it('case4', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["1", "1", "2", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    });
    it('case5', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["1", "1", "2", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    });
    it('case6', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["3", "4", "5", "6", "7", "6", "3", "5", "3", "4", "4", "4"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    });
    it('check not positive int', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["-2"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(consts_1.TEXT_NOT_POSITIVE);
    });
    it('check not positive int', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["-2"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(consts_1.TEXT_NOT_POSITIVE);
    });
    it('check length invalid range', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["2", "1", "1", "100000000000000000"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(consts_1.INVALID_RANGE_LENGTH);
    });
    it('check value invalid range', function () {
        stdin = mock_stdin_1["default"].stdin();
        (0, index_1.main)();
        stdin.send(["3", "1", "1", "100000000000000000"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(consts_1.INVALID_RANGE_VALUE);
    });
});

"use strict";
exports.__esModule = true;
var InputArray_1 = require("../src/InputArray");
describe('check compose arrays A from B', function () {
    var mapA;
    var mapB;
    beforeEach(function () {
        mapA = new InputArray_1.InputArray(0, []);
        mapB = new InputArray_1.InputArray(0, []);
    });
    it('case1', function () {
        mapA.setValues([1, 1, 1, 2]);
        mapB.setValues([1, 2, 3, 4, 5, 6]);
        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false);
    });
    it('case2', function () {
        mapA.setValues([1, 2, 3, 4, 5]);
        mapB.setValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(true);
    });
    it('case3', function () {
        mapA.setValues([1, 2, 3, 4, 5]);
        mapB.setValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false);
    });
    it('case4', function () {
        mapA.setValues([1]);
        mapB.setValues([1, 1]);
        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(true);
    });
    it('case5', function () {
        mapA.setValues([1, 1]);
        mapB.setValues([1]);
        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false);
    });
    it('case6', function () {
        mapA.setValues([4, 5, 6]);
        mapB.setValues([6, 3, 5, 3, 4, 4, 4]);
        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(true);
    });
    it('case7', function () {
        mapA.setValues([6, 3, 5, 3, 4, 4, 4]);
        mapB.setValues([4, 5, 6]);
        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false);
    });
});
describe('correct add values to Map from Array', function () {
    var arrayA = [];
    var mapA = new InputArray_1.InputArray(0, arrayA);
    afterEach(function () {
        jest.clearAllMocks();
        //        jest.spyOn(f, "programEnd").mockImplementation(jest.fn());
    });
    it('case1', function () {
        mapA.setValues([6, 3, 5, 3, 4, 4, 4]);
        var otherMap = new Map;
        otherMap.set(6, 1);
        otherMap.set(3, 2);
        otherMap.set(5, 1);
        otherMap.set(4, 3);
        expect(compareMaps(otherMap, mapA.values)).toStrictEqual(true);
    });
    it('case2', function () {
        mapA.setValues([6, 3, 5, 3, 4, 4, 4]);
        var otherMap = new Map;
        otherMap.set(6, 1);
        otherMap.set(3, 1);
        otherMap.set(5, 1);
        otherMap.set(4, 3);
        expect(compareMaps(otherMap, mapA.values)).toStrictEqual(false);
    });
    it('case3', function () {
        mapA.setValues([1, 1, 1, 1, 1, 1]);
        var otherMap = new Map;
        otherMap.set(1, 6);
        expect(compareMaps(otherMap, mapA.values)).toStrictEqual(true);
    });
});

// compare two flat map
function compareMaps(map1, map2) {
    var testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (var _i = 0, map1_1 = map1; _i < map1_1.length; _i++) {
        var _a = map1_1[_i], key = _a[0], val = _a[1];
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}

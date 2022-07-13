import {InputArray} from "../src/InputArray";

describe('check compose arrays A from B', () => {

    let mapA: InputArray;
    let mapB: InputArray;

    beforeEach(() => {
        mapA = new InputArray(0, [])
        mapB = new InputArray(0, [])
    });

    it('case1', () => {

        mapA.setValues([1, 1, 1, 2]);
        mapB.setValues([1, 2, 3, 4, 5, 6]);

        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false)
    })

    it('case2', () => {

        mapA.setValues([1, 2, 3, 4, 5]);
        mapB.setValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(true)
    })

    it('case3', () => {

        mapA.setValues([1, 2, 3, 4, 5]);
        mapB.setValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false)
    })

    it('case4', () => {

        mapA.setValues([1]);
        mapB.setValues([1, 1]);

        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(true)
    })

    it('case5', () => {

        mapA.setValues([1, 1]);
        mapB.setValues([1]);

        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false)
    })

    it('case6', () => {

        mapA.setValues([4, 5, 6]);
        mapB.setValues([6, 3, 5, 3, 4, 4, 4]);

        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(true)
    })

    it('case7', () => {

        mapA.setValues([6, 3, 5, 3, 4, 4, 4]);
        mapB.setValues([4, 5, 6]);

        expect(mapA.isCanComposeFromAnotherMap(mapB)).toStrictEqual(false)
    })
})

describe('correct add values to Map from Array', () => {

    let arrayA = []
    let mapA: InputArray;

    beforeEach(() => {
        mapA = new InputArray(0, [])
    });

    afterEach(() => {
        jest.clearAllMocks();
//        jest.spyOn(f, "programEnd").mockImplementation(jest.fn());
    });

    it('case1', () => {
        mapA.setValues([6, 3, 5, 3, 4, 4, 4]);

        let otherMap = new Map<number, number>;
        otherMap.set(6, 1);
        otherMap.set(3, 2);
        otherMap.set(5, 1);
        otherMap.set(4, 3);

        expect(compareMaps(otherMap, mapA.values)).toStrictEqual(true);
    })

    it('case2', () => {
        mapA.setValues([6, 3, 5, 3, 4, 4, 4]);

        let otherMap = new Map<number, number>;
        otherMap.set(6, 1);
        otherMap.set(3, 1);
        otherMap.set(5, 1);
        otherMap.set(4, 3);

        expect(compareMaps(otherMap, mapA.values)).toStrictEqual(false);
    })

    it('case3', () => {
        mapA.setValues([1, 1, 1, 1, 1, 1]);

        let otherMap = new Map<number, number>;
        otherMap.set(1, 6);

        expect(compareMaps(otherMap, mapA.values)).toStrictEqual(true);
    })
})

// compare two flat map
function compareMaps(map1, map2) {
    let testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}
import mockStdin from 'mock-stdin';
import {main} from '../src/index';
import {INVALID_RANGE_LENGTH, INVALID_RANGE_VALUE, TEXT_NOT_POSITIVE} from "../src/consts";

console.log = jest.fn()

let stdin: ReturnType<typeof mockStdin.stdin>
let result: string;
let errorMessage: string;


describe('test main()', () => {

    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation((e) => {
            result = e;
        });
        jest.spyOn(console, "error").mockImplementation((e) => {
            errorMessage = e;
        });
    })

    afterEach(() => {
        result = "";
        errorMessage = "";
    })

    it('case1', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["2", "1", "1", "2", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    })

    it('case2', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["5", "1", "2", "3", "4", "5", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    })

    it('case3', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["5", "1", "2", "3", "4", "5", "10", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("False");
    })

    it('case4', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["1", "1", "2", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    })

    it('case5', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["1", "1", "2", "1", "1"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    })

    it('case6', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["3", "4", "5", "6", "7", "6", "3", "5", "3", "4", "4", "4"]);
        stdin.end();
        expect(result).toStrictEqual("True");
    })


    it('check not positive int', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["-2"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(TEXT_NOT_POSITIVE);
    })

    it('check not positive int', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["-2"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(TEXT_NOT_POSITIVE);
    })

    it('check length invalid range', () => {
        stdin = mockStdin.stdin();
        main();
        stdin.send(["2", "1", "1", "100000000000000000"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(INVALID_RANGE_LENGTH);
    })

    it('check value invalid range', () => {
        stdin = mockStdin.stdin()
        main();
        stdin.send(["3", "1", "1", "100000000000000000"]);
        stdin.end();
        expect(errorMessage).toStrictEqual(INVALID_RANGE_VALUE);
    })

});


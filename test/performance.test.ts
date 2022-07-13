import mockStdin from 'mock-stdin';
import {performance} from 'perf_hooks';

let stdin: ReturnType<typeof mockStdin.stdin>
let resultPerformance = [];

const cases = [[1000], [10000], [10000], [50000], [100000], [200000], [300000], [400000], [500000], [600000], [700000], [800000], [900000], [1000000]];


describe.skip('test performance', () => {

    let startTime;
    let endTime;

    let lengthA: number;
    let lengthB: number;

    beforeEach(() => {
        startTime = performance.now();
    })

    afterEach(() => {
        startTime = null;
        endTime = null;
        lengthA = null;
        lengthB = null;

        jest.resetAllMocks();
    })

    afterAll(() => {
        console.log(resultPerformance);
    });

    it(' run performance', () => {
        // must be 1 test
        expect(1).toStrictEqual(1);
    })

    /*it.each(cases)(
        "case %p",
        (size) => {
            stdin = mockStdin.stdin()
            main();

            lengthA = size
            lengthB = size;

            stdin.send(generateValuesForArray(lengthA,lengthB));
            stdin.end();
            endTime =  performance.now();

            resultPerformance.push({"lengthA": lengthA, "lengthB":lengthB,  "time" : (endTime-startTime).toFixed(4) });
        }
    );*/

})

function generateValuesForArray(lengthA: number, lengthB: number): string[] {
    let output: string[] = [];
    output.push(lengthA.toString());

    for (let i = 0; i < lengthA; i++) {
        output.push(randomIntFromInterval(1, Math.pow(10, 6)).toString());
    }

    output.push(lengthB.toString());

    for (let i = 0; i < lengthB; i++) {
        output.push(randomIntFromInterval(1, Math.pow(10, 6)).toString());
    }

    return output;
}

// min and max included
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

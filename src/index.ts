import * as readline from "readline";
import {Utils} from "./Utils";
import {InputArray} from "./InputArray";
import {TEXT_NOT_POSITIVE} from "./consts";


export const main = (): void => {
    let rl = readline.createInterface(process.stdin, process.stdout);

    let arrayFromStdin: number[] = [];

    rl.on('line', function (line) {

        // check positive integer
        if (Utils.isPositiveNumeric(line)) {
            let parsedIntLine = parseInt(line, 10);
            // check range
            Utils.checkValueFromStdin(parsedIntLine, arrayFromStdin);

            arrayFromStdin.push(parsedIntLine);

            if (Utils.isFullEnteredArrayValues(arrayFromStdin)) {

                let lengthArrayA = arrayFromStdin[0];
                //+1 - head of array
                let lengthArrayB = arrayFromStdin[arrayFromStdin[0] + 1];

                // split entered array
                let arrayA = arrayFromStdin.slice(1, arrayFromStdin[0] + 1);
                let arrayB = arrayFromStdin.slice(arrayFromStdin[0] + 2);

                let mapA = new InputArray(lengthArrayA, arrayA);
                let mapB = new InputArray(lengthArrayB, arrayB);

                // output result
                console.log(Utils.convertBooleanToStr(mapA.isCanComposeFromAnotherMap(mapB)));
                rl.close();
                //process.exit(0);
            }

        } else
            console.error(TEXT_NOT_POSITIVE);
    });
}
main();

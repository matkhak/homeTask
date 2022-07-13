export class InputArray {

    length: number
    // map of element and its count
    values: Map<number, number>;

    constructor(length: number, array: Array<number>) {
        this.length = length;
        this.values = new Map<number, number>;
        this.setValues(array);
    }

    setValues(array: Array<number>): void {
        for (let element of array) {
            if (this.values.has(element)) {
                this.values.set(element, this.values.get(element) + 1);
            } else {
                this.values.set(element, 1);
            }
        }
    }

    isCanComposeFromAnotherMap(map: InputArray): boolean {

        for (let [key, value] of Array.from(this.values.entries())) {
            if (!map.values.has(key) || map.values.get(key) < value) {
                return false;
            }
        }
        return true;

    }
}


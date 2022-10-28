"use strict";
class Validator {
    constructor(data) {
        this.data = data;
    }
}
class StringValidator extends Validator {
    constructor(data) {
        if (typeof data === "string") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}
class NumberValidator extends Validator {
    constructor(data) {
        if (typeof data === "number") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}
class BooleanValidator extends Validator {
    constructor(data) {
        if (typeof data === "boolean") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}
const test = new BooleanValidator(true);

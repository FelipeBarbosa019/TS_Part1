class Validator {
    data: number | string | boolean | void | null | undefined;

    constructor(data: any) {
        this.data = data;
    }
}

class StringValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "string") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class NumberValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "number") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class BooleanValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "boolean") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

const test = new StringValidator(1);

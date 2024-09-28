// No 1
// String
let firstName: string = "John";
let lastName: string = "Doe";

// Number
let age: number = 30;
let score: number = 95;
let temperature: number = 36.6;

// Boolean
let isActive: boolean = true;
let isVerified: boolean = false;
let hasLicense: boolean = true;

// Null
let emptyValue: null = null;
let noData: null = null;

// Undefined
let uninitialized: undefined = undefined;
let notDefined: undefined;

// Symbol
let uniqueSymbol1: symbol = Symbol("symbol1");
let uniqueSymbol2: symbol = Symbol("symbol2");
let key: symbol = Symbol("key");

// BigInt
// @ts-ignore
let bigIntNumber: bigint = 123456789123456789n;
// @ts-ignore
let anotherBigInt: bigint = 987654321987654321n;

// Any (still considered a basic type for versatility)
let randomValue: any = "hello";
let anything: any = 100;
let mixedType: any = true;

// String, number, and boolean with explicit types
let city: string = "New York";
let distance: number = 1000;
let isOnline: boolean = false;


// No 2
class Calculator {
    addition = (a: number, b: number): number => {
        return a + b;
    }

    subtraction = (a: number, b: number): number => {
        return a - b;
    }

    multiplication = (a: number, b: number): number => {
        return a * b;
    }

    division = (a: number, b: number): number => {
        return a / b;
    }
}

const calculator = new Calculator();

console.log(calculator.addition(20, 20));
console.log(calculator.subtraction(20, 20));
console.log(calculator.multiplication(20, 20));
console.log(calculator.division(20, 20));



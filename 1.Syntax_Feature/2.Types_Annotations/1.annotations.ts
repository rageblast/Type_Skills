// annotations
const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// classes
class Car {}

let car: Car = new Car();

// object
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// logNumber: (annotations) = implementations
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// above one annotations is defined for varaiable

// Type Inference

//(var declar)
const color = 'red'; // (var Intialization)

// if declaration and Initialization are on the same line,
// Typescript will figure out the type of 'Color' for us

// Intialization and declaration should have to be done on the
// same line

// like above color if not it will show as any type
// see the below one

let apple;
apple = 5;

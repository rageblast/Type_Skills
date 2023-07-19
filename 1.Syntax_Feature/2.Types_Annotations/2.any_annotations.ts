// 1. Function returns the 'any' type

const json = '{"X": 10, "y": 20}';
// const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// above returns any hover over coordinates

// why see the JSON.PARSE functionality

// 'false' -> JSON.parse() - boolean
// '4' -> JSON.parse() - number
// '{"value":5}' -> JSON.parse() - {value: number}
// '{"name":"alex"}' -> JSON.parse() - { name: string}

// TS cannot read the types(JSON.PARSE) so it returns any

// Any - A type, just as 'string' or 'boolean' are
// Means TS has no idea what this is - can't check
// for correct property references
// Avoid var with 'any' at all costs

// to avoid any we can assign type annotations to coordinates

// JSON.parse  - returns any like this we have many functions returns any

// 2. declare var in one line and initialize it later
let words = ['red', 'green', 'blue'];
// let foundWord; // returns any
let foundWord: boolean; // now it won't say any

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. Var whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// let numberAboveZero = false; // Ts infernace does'nt know what we are trying to acheieve
// so we need assign like the below one
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

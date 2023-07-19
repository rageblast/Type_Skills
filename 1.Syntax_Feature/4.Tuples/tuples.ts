const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

// type alias

// the above one can be defined as shown below
type Drinks = [string, boolean, number];

const coke: Drinks = ['brown', true, 40];

// if we want to model our records
// we can use objects

// we don't understand the below one with tuples
const carSpecs: [number, number] = [400, 3324];

// but with object we can
const carStats = {
  horsepower: 400,
  weight: 3354,
};

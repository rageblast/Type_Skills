// inference
const carMakers = ['ford', 'Tesla'];

// annotations
const test: string[] = [];

// 2d arrays
const carsByMake: string[][] = [['f150'], ['corolla']];

// Help with inference when extracting values
const carname = carMakers[0];
// above one will assigned as string type
const myCar = carMakers.pop();
// above one will assigned as string type

// inference does the staff of assigning

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), 'app'];
const dates: (Date | string)[] = [];

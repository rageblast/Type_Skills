const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of water`;
  },
};

const printVehicle = (vechile: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log('vechile Name', vechile.name);
  console.log('year', vechile.year);
  console.log('broken', vechile.broken);
};

printVehicle(oldCivic);

// now the above parameter is small and if it gets big its hard to type
// then we need to type the parameter for all the functions

interface Vechicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// we can use any types in interfaces and express functions also
interface Vechicle1 {
  name: string;
  year: Date;
}

const printVehicle1 = (vechile: Vechicle): void => {
  console.log('vechile Name', vechile.name);
  console.log('year', vechile.year);
  console.log('broken', vechile.broken);
};

// using interface we have solved the above problems

printVehicle1(oldCivic);

// ts will loop through oldCivic
// and check if the properties in oldCivic and Vechicle
// interface matches and it checks their types also

// if it didn't matches it wont work

interface Reportable {
  summary(): string;
}

// the above one will check for the summary only
// not other properties so we can use it as resuable
// functions
// with differnt properties with summary function

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinks);

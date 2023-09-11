interface propobject {
  id?: number;
  name?: string;
  age?: number;
}

export class Attributes<T extends Object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  // <K extends keyof T> -> K - is a type of propobject(T)
  // key: K -> is a string with prop name of propobject(T)
  // T[K] -> propobject[id] -> any value in square brackets -> returns the type

  // because of the below one we used Object in the extend
  set(update: T): void {
    Object.assign(this.data, update);
  }

  // all data of user props stored here
  getAll(): T {
    return this.data;
  }
}

// string can be type

// type BestName = 'stephen';

// const printName = (name: BestName): void => {

// }

// printName('jhkkjkj'); this won't work
// printName('stephen'); this will work it has the type

//  object keys in js and ts are strings

// keys of an object can be a type

// we are using the above methods in the get

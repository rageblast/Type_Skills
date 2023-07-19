import 'reflect-metadata';

// it adds global variable of Reflect

//Adding an invisible property to metadata

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);

console.log(plane);

// to get the invisiable object value

const note = Reflect.getMetadata('note', plane);

console.log(note);

// adding additional value to the color property

Reflect.defineMetadata('note', 'hi there', plane, 'color');

// retrieve

const notes = Reflect.getMetadata('note', plane, 'color');

console.log(notes);

// color  ---- red(value)
// |------------- metadata (additional details)

import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret', 123, target, key);
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

// below one is changed to above
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);

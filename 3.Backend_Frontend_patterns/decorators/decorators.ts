// https://www.typescriptlang.org/docs/handbook/decorators.html

@classDecorator
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('switch');
    } else {
      console.log('nothing');
    }
  }

  // @logError
  @logError('oops, boat was sunk')
  log(): void {
    throw new Error();
    console.log('switch');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// target -> prototype
// key -> constructor value
function testDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  console.log('Target:', target);
  console.log('key:', key);
}

// we can do like above or the below

// testDecorator(Boat.prototype, 'pilot');

// function logError(target: any, key: string, desc: PropertyDescriptor): void {
//   const method = desc.value;

//   desc.value = function () {
//     try {
//       method();
//     } catch (e) {
//       console.log('oops, boat was sunk');
//     }
//   };
// }

// Decarator factory returns a function

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

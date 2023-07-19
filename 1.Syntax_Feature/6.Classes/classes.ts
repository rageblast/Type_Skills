class Vechicles {
  // drive(): void {
  //   console.log('chugga chugga');
  // }
  // color: string;

  // to pass values we need constructor
  // constructor(color: string) {
  //   this.color = color;
  // }

  // above we need to define three times color
  // one define var color
  // second pass value to color in constructor
  // assigning the value to the color var

  // we can shorten the above one by
  constructor(protected color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Cares extends Vechicles {
  // we can define var directly inside class
  // color: string = 'red';

  constructor(public wheels: number, color: string) {
    super(color);
  }

  // we didn't define protected or Public inside constructor
  // for color because it belongs to parent
  // and we have defined the modifier there

  // override
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// when we override a method of parent class
// we sholud put private on it

// so if we want we can remove it from parent and use
// it here

const vechicle = new Vechicles('orange');
// vechicle.drive();

const carers = new Cares(10, 'orange');
carers.startDrivingProcess();

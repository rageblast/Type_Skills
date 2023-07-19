import { faker } from '@faker-js/faker'; // ctrl  + click to see all the object of faker
import { Mappable } from './CustomMap';

// we can find error easily where it is orginating
// implements will tell User if you want to use Mappable
// you need to satisfy Mappable properties

// Now we can see the error and fix it from here
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

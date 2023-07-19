import { faker } from '@faker-js/faker'; // ctrl  + click to see all the object of faker
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPharase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  //below one can be html also in doc of info window
  // it accepts string and HTML as content
  markerContent(): string {
    return `
    <div>
   <h1> Company Name: ${this.companyName} </h1>
   <h3> Catchphrase: ${this.catchPharase} </h3>
    </div>
    `;
  }
}

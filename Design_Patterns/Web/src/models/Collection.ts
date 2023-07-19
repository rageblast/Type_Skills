import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { Eventing } from './Eventing';

// Here T - User class, K - Userprops
export class Collection<T, K> {
  models: T[] = [];
  // we have initialzing the events in the get go
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
  // we can't use shorter syntax because
  // we didn't initalized the events before

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        // const user = User.buildUser(value);
        // this.models.push(user);
        // for the above line we are creating a value inside
        // constructor and refering it here
        this.models.push(this.deserialize(value));
      });
      this.trigger('change');
    });
  }
}

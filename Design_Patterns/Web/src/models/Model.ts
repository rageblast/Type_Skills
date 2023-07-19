import { Axios, AxiosPromise, AxiosResponse } from 'axios';

// below interface are created same as the
// methods they refer inside each class
interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // get on() {
  //   // returns the function and we can use it
  //   return this.events.on;
  // }

  // above method and the below one are same

  on = this.events.on;
  // above one will already been assigned before constructor initalization
  // see the private
  // that's why we can use the above methods

  // get trigger() {
  //   return this.events.trigger;
  // }

  trigger = this.events.trigger;

  // get get() {
  //   return this.attributes.get;
  // }

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}

// accessor - > get -> function without parenthesis -> access value not modify anything

// this -> rule of thumb see the left property

//  const person {
//  color : "red",
// print() {
// console.log(this.color);
// }
// }

// person.print() -> this -> person -> above person.color

// const printColor = person.print
// printColor - undefined because no left
// fix it we use arrow function

// here we implement in get

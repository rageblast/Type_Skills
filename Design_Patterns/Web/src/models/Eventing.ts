// Type alias - saying callback is a function type
// it says function with no arguments and returns nothing
type Callback = () => void;

export class Eventing {
  // we don't know the key value until the on function
  // called so we use [key: string] to assign dynamic key value
  // then for the key it is a array of callback function
  // that executes in order

  events: { [key: string]: Callback[] } = {};

  // every object is a key value pair
  // so for the on function we are going to get
  // the key value once they have called and store
  // the callback function's of the key in an array

  on = (eventName: string, callback: Callback): void => {
    // first time when we initialize it for user
    // the above events will return undefined
    // so we use the below one
    // if empty give us an arry
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  // triggering the above events
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}

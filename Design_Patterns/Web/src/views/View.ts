import { Model, HasId } from '../models/Model';

// see the below generics T extends Model<K>, K extends HasId(important check)
export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  // abstract eventsMap(): { [key: string]: () => void };

  // we are changing the above eventsMap because in UserShow
  // we don't want the eventsMap to be excuted inside of it
  // because it don't want that
  // so we need to say events has to be executed for some child classes
  // for other child classes that does not want events it should be empty
  // for that see the below one

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  // what we are doing here is getting the html element
  // before inserting into the dom and add the events
  // to the respective elements and then send it dom

  // here the fragment will hold th HTML elements
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // here the template has content property which holds the fragment

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}

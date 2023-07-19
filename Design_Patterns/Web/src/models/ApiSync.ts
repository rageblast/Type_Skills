import axios, { AxiosResponse, AxiosPromise } from 'axios';

//Axios - returns a response and that one is AxiosResponse

// Here the T does not know whether the ID property exsist or not
// so it will use interface and tell T the property that has passed
// to u will have these property

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  // retrieve user
  // fetch(id: number): void {
  //   axios.get(`${this.rootUrl}/${id}`).then((response: AxiosResponse): void => {
  //     this.set(response.data);
  //   });
  // }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}

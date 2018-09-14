import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
// {
//   providedIn: 'root'
// }
)
export class HttpService {
  constructor(private _http: HttpClient) {
    // when you are built, run this function
    this.getTasks();
  }

   getTasks() {
     // this will be an observable
     const tempObservable = this._http.get('/tasks');
    // subscribe to the observable
     tempObservable.subscribe(data => console.log('Got our tasks!', data));
   }

}

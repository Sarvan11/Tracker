import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  getVehicles(): Observable<any> {
    return this.http.get('http://mocker.egen.io/users');
      // .map(response => JSON.parse(response))
      // .catch(error => Observable.throw(error.statusText));
  }
}

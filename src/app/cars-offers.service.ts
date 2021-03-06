import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Cars } from './cars';

@Injectable()
export class CarsOffersService {
  private carsUrl = 'assets/cars-offers.json';
  constructor(private http: Http) { }

  getCars(): Observable<Cars []> {
    return this.http.get(this.carsUrl)
                .map(this.extractData)
                .catch(this.handleError);
  }
  getCar(id: number) {
    return this.getCars()
             .map(cars => cars.find( car => id == car.id));
   }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

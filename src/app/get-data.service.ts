/*
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

 
@Injectable()
export class GetDataService {
  constructor(private http: Http) { }
 
  public getAll(): Promise<Object> {
    return this.http.request('./assets/internData.json')
                 .map(res => res.json());
  }
 
}
*/

import {
  Injectable
} from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http';
import {
  Observable,
  Subject
} from 'rxjs/Rx';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetDataService {
  private jsonFileURL: string = "./assets/internData.json";
  constructor(private http: Http) {}
  //    
  getData(): Observable < any > {
    return this.http.get(this.jsonFileURL).map((response: Response) => {
      return <any> response.json()
    }).catch(this.handleError);
  }
  //    
  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || "Server error");
  }
}

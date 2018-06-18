import { Injectable } from '@angular/core';
import {HttpModule, Http, Response, Headers} from '@angular/http';
import { map, delay, catchError } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class MapaServiceService {

  constructor(public _http: Http) { }

  getEstableshment(){
    return this._http.get('http://localhost:8080/establishments').pipe(map(Response => Response.json()));
  }
}

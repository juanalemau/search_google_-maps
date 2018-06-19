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

  postEstableshment(estableshment: any){
    const body = JSON.stringify(estableshment);
    const header = new Headers();
    header.append("Content-Type","application/json"); 

    return this._http.post('http://localhost:8080/find/establishment', body, { headers: header }).pipe(map(Response => Response.json()));
  }
}

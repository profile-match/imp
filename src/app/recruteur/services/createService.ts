/**
 * Created by Misternutz on 20/01/2017.
 */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import { Observable } 	  from 'rxjs';

import 'rxjs/add/operator/toPromise';
import {environment} from "../../../environments/environment";
import {Poste} from "../interfaces/poste";



@Injectable()
export class createService {

  private headers = new Headers({'Content-Type': 'application/json'});

  // private property to store all backend URLs
  private _backendURL: any;
  private candidatsUrl = 'api/candidats';  // URL to web api
  private _dossier :Poste;

  constructor(private _http: Http) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }


    create(dossier): Observable<Poste> {
      return this._http.post(this._backendURL.addPoste, (dossier), this._options())
        .map((res: Response) => res.json());
  }

    delete(id:any): any {

    return this._http.delete(this._backendURL.deletePoste.replace(':id', id), this._options());

    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private _options(headerList: Object = {}): RequestOptions {
    const headers = new Headers(Object.assign({'Content-Type': 'application/json'}, headerList));
    return new RequestOptions({headers: headers});
  }



}

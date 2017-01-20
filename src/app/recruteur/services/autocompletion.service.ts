import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import { Observable } 	  from 'rxjs';

import 'rxjs/add/operator/toPromise';
import {environment} from "../../../environments/environment";
import {Savoir} from "../classes/savoir";

@Injectable()
export class AutocompletionService {

  private headers = new Headers({'Content-Type': 'application/json'});

  // private property to store all backend URLs
  private _backendURL: any;
  private candidatsUrl = 'api/candidats';  // URL to web api

  constructor(private http: Http) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  searchMetier(intitule: string): Observable<Savoir[]> {
    return this.http
      .get(this._backendURL.searchMetier.replace(':intitule', intitule))
      .map((r: Response) => r.json().data as Savoir[]);
  }

  searchFonctionnelle(intitule: string): Observable<Savoir[]> {
    return this.http
      .get(this._backendURL.searchFonctionnelle.replace(':intitule', intitule))
      .map((r: Response) => r.json().data as Savoir[]);
  }

  searchTechnique(intitule: string): Observable<Savoir[]> {
    return this.http
      .get(this._backendURL.searchTechnique.replace(':intitule', intitule))
      .map((r: Response) => r.json().data as Savoir[]);
  }

  searchLinguistique(intitule: string): Observable<Savoir[]> {
    return this.http
      .get(this._backendURL.searchLinguistique.replace(':intitule', intitule))
      .map((r: Response) => r.json().data as Savoir[]);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}

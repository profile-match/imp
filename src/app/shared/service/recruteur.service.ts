import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Poste} from "../../recruteur/interfaces/poste";
import {Recruteur} from "../../recruteur/interfaces/recruteur";

@Injectable()
export class RecruteurService {

  private headers = new Headers({'Content-Type': 'application/json'});

  // private property to store all backend URLs
  private _backendURL: any;

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

  getPosts(): Promise<Poste[]> {
    return this.http.get(this._backendURL.allPost)
      .toPromise()
      .then(response => response.json().data as Poste[])
      .catch(this.handleError);
  }

  getRecruteurs(): Promise<Recruteur[]> {
    return this.http.get(this._backendURL.allRecruteur)
      .toPromise()
      .then(response => response.json().data as Recruteur[])
      .catch(this.handleError);
  }

  getRecruteur(id: number): Promise<Recruteur> {
    //const url = `${this.candidatsUrl}/${id}`;
    return this.http.get(this._backendURL.oneRecruteur.replace(':id', id))
      .toPromise()
      .then(response => response.json().data as Recruteur)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

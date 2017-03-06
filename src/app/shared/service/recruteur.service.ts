import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Poste} from "../../recruteur/interfaces/poste";
import {Recruteur} from "../../recruteur/interfaces/recruteur";
import {Observable} from 'rxjs';

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

  getPosts(): Observable<Poste[]> {
    return this.http.get(this._backendURL.allPost)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getPost(id: number): Observable<Poste[]> {
    return this.http.get(this._backendURL.onePost.replace(':idRecruteur', id))
      .map( res =>  res.json() );
  }

  bannir(recruteur: Recruteur) {//: Promise<Candidat[]> {
    const requestOptions = { headers: new Headers({'Content-Type': 'application/json'})};
    return this.http
      .put(this._backendURL.banRecruteur.replace(':id',recruteur.id), recruteur, requestOptions)
      .map( res => {
        if (res.status === 200) {
          return res.json();
        }
        else {
          return [];
        }
      });
  }

  unBan(recruteur: Recruteur) {
    const requestOptions = { headers: new Headers({'Content-Type': 'application/json'})};
    return this.http
      .put(this._backendURL.unBanRecruteur.replace(':id',recruteur.id), recruteur, requestOptions)
      .map( res => {
        if (res.status === 200) {
          return res.json();
        }
        else {
          return [];
        }
      });
  }

  getRecruteurs(): Observable<Recruteur[]> {
    return this.http.get(this._backendURL.allRecruteur)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getRecruteur(id
                 : number): Observable<Recruteur> {
    //const url = `${this.candidatsUrl}/${id}`;
    return this.http.get(this._backendURL.oneRecruteur.replace(':id', id))
      .map( res =>  res.json() )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

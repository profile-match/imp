import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import { Observable } 	  from 'rxjs';

import { Candidat } from '../../candidat/interfaces/candidat';
import { Comment } from '../../candidat/interfaces/commentaire';


import 'rxjs/add/operator/toPromise';
import {environment} from "../../../environments/environment";

@Injectable()
export class CandidatService {

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

  search(term: string): Observable<Candidat[]> {
    return this.http
      .get(`/api/candidats/?name=${term}`)
      .map((r: Response) => r.json().data as Candidat[]);
  }

  getComments(): Promise<Comment[]> {
    return this.http.get(this._backendURL.allComment)
      .toPromise()
      .then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  getComment(idCandidat: number): Promise<Comment[]> {
    return this.http.get(this._backendURL.oneComment.replace(':id', idCandidat))//`/api/candidats/?idCandidat=${idCandidat}`)
      .toPromise()
      .then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  getCandidats(): Promise<Candidat[]> {
    return this.http.get(this._backendURL.allCandidat)
      .toPromise()
      .then(response => response.json().data as Candidat[])
      .catch(this.handleError);
  }

  getCandidat(id: number): Promise<Candidat> {
    //const url = `${this.candidatsUrl}/${id}`;
    return this.http.get(this._backendURL.oneCandidat.replace(':id', id))
      .toPromise()
      .then(response => response.json().data as Candidat)
      .catch(this.handleError);
  }

  bannir(candidat: Candidat): Promise<Candidat[]> {
    return this.http
      .put(this._backendURL.bannirCandidat.replace(':id',candidat.id), JSON.stringify(candidat))
      .toPromise()
      .then(response => response.json().data as Candidat[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  getCandidatsSlowly(): Promise<Candidat[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCandidats()), 2000);
    });
  }

}

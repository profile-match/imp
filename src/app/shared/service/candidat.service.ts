import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable}    from 'rxjs';

import {candidat} from '../../candidat/interfaces/candidat';
import {Comment} from '../../candidat/interfaces/commentaire';


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

  search(term: string): Observable<candidat[]> {
    return this.http
      .get(`http://localhost:8080/rest/candidat/get/?nom=${term}`)//`/api/candidats/?name=${term}`)
      .map((r: Response) => r.json().data as candidat[]);
  }

  getComments(): Promise<Comment[]> {
    return this.http.get(this._backendURL.getComments)
      .toPromise()
      .then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  getComment(idCandidat: number): Promise<Comment[]> {
    return this.http.get(this._backendURL.getComment.replace(':id', idCandidat))//`/api/candidats/?idCandidat=${idCandidat}`)
      .toPromise()
      .then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  deleteComment(idCandidat: number): Promise<Comment[]> {
    return this.http.delete(this._backendURL.getComments.replace(':id', idCandidat))
      .toPromise()
      .then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  editComment(idCandidat: number): Promise<Comment[]> {
    return this.http.put(this._backendURL.oneComment.replace(':id', idCandidat), idCandidat)//`/api/candidats/?idCandidat=${idCandidat}`)
      .toPromise()
      .then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  getCandidats(): Observable<candidat[]> {
    return this.http.get(this._backendURL.getCandidats)
      .map(res => res.json());
  }

  getCandidat(id: string): Observable<candidat> {
    //const url = `${this.candidatsUrl}/${id}`;
    // console.log(this._backendURL.getCandidat.replace(':id', id));
    return this.http.get(this._backendURL.getCandidat.replace(':id', id))
      .map(res => res.json());
  }

  bannir(candidat: candidat) {//: Promise<candidat[]> {
    const requestOptions = {headers: new Headers({'Content-Type': 'application/json'})};
    return this.http
      .put(this._backendURL.bannirCandidat.replace(':id', candidat.id), candidat, requestOptions)
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
        else {
          return [];
        }
      });
  }

  unBan(candidat: candidat) {
    const requestOptions = {headers: new Headers({'Content-Type': 'application/json'})};
    return this.http
      .put(this._backendURL.unbanCandidat.replace(':id', candidat.id), candidat, requestOptions)
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
        else {
          return [];
        }
      });
  }

  suspend(candidat: candidat): Observable<candidat>  {
    // console.log(this._backendURL.suspendCandidat.replace(':id', candidat.id));
    return this.http.get(this._backendURL.suspendCandidat.replace(':id', candidat.id))
      .map(res => res.json());
  }

  unSuspend(candidat: candidat): Observable<candidat>  {
    return this.http.get(this._backendURL.unsuspendCandidat.replace(':id', candidat.id))
      .map(res => res.json());
  }


  getNbFemelle() {
    return this.http.get(this._backendURL.nbFemelle)
      .map(res => res.json());
  }

  getNbMale() {
    return this.http.get(this._backendURL.nbMale)
      .map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

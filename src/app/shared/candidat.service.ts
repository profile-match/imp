import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {candidat} from "../interfaces/candidat";

@Injectable()
export class CandidatService {

  private _backendURL: any;

  constructor(private _http: Http) {
    this._backendURL = {};

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  createCandidat(c: candidat): Observable<candidat> {
    return this._http.post(this._backendURL.creerCandidat, JSON.stringify(c), this._options())
      .map((res: Response) => res.json());
  }

  updateCandidat(c: candidat): Observable<candidat> {
    return this._http.put(this._backendURL.modifierCandidat, JSON.stringify(c), this._options())
      .map((res: Response) => res.json());
  }

  getCandidat(id: string): Observable<any> {
    return this._http.get(this._backendURL.getCandidat.replace(':id', id))
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
      });
  }

  getCompetences(s: string): Observable<string[]> {
    return this._http.get(this._backendURL.getCompetences.replace(':comp', s))
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
      });
  }

  private _options(): RequestOptions {
    const headers = new Headers(Object.assign({'Content-Type': 'application/json'}));
    return new RequestOptions({headers: headers});
  }

}

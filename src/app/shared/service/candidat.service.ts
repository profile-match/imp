import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable}      from 'rxjs';


import 'rxjs/add/operator/toPromise';
import {environment} from "../../../environments/environment";
import {candidat} from "../../Candidat/interfaces/candidat";
import {Commentaire} from "../../Candidat/interfaces/commentaire";

@Injectable()
export class CandidatService {

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

  private _options(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({headers: headers});
  }

  getCv(id:number): Observable<any> {
    return this.http.get(this._backendURL.getCv.replace(':id', id))
      .map((res) => {});
  }

  uploadPhoto(c: FileList): Observable<string> {
    let formData: FormData = new FormData();
    formData.append('filedata', c[0], c[0].name);
    let headers = new Headers();
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post(this._backendURL.postPhotoCandidat, formData, new RequestOptions())
      .map((res) => res.json());

  }

  getPhotoUrl(id:string):string{
    return this._backendURL.getPhotoCandidat.replace(':id', id);
  }

  createCandidat(c: candidat): Observable<candidat> {
    return this.http.post(this._backendURL.creerCandidat, JSON.stringify(c), this._options())
      .map((res) => res.json());
  }

  updateCandidat(c: candidat): Observable<candidat> {
    return this.http.put(this._backendURL.modifierCandidat, JSON.stringify(c), this._options())
      .map((res) => res.json());
  }

  updateCandidatPost(c: candidat, id:any): Observable<candidat> {
    return this.http.put(this._backendURL.updateCandPost.replace(':id',id), JSON.stringify(c), this._options())
      .map((res) => res.json());
  }


  getCandidat(id: string): Observable<candidat> {
    return this.http.get(this._backendURL.getCandidat.replace(':id', id))
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
      });
  }


  getCompetences(s: string): Observable<string[]> {
    return this.http.get(this._backendURL.getCompetences.replace(':comp', s))
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
      });
  }

  search(term: string): Observable<candidat[]> {
    return this.http
      .get(`http://localhost:8080/rest/candidat/get/?nom=${term}`)//`/api/candidats/?name=${term}`)
      .map((r) => r.json().data as candidat[]);
  }

  getComments(): Promise<Commentaire[]> {
    return this.http.get(this._backendURL.allComment)
      .toPromise()
      .then(response => response.json().data as Commentaire[])
      .catch(this.handleError);
  }

  getComment(idCandidat: number): Promise<Commentaire[]> {
    return this.http.get(this._backendURL.oneComment.replace(':id', idCandidat))//`/api/candidats/?idCandidat=${idCandidat}`)
      .toPromise()
      .then(response => response.json().data as Commentaire[])
      .catch(this.handleError);
  }

  deleteComment(idCandidat: number): Promise<Commentaire[]> {
    return this.http.delete(this._backendURL.allComment.replace(':id', idCandidat))
      .toPromise()
      .then(response => response.json().data as Commentaire[])
      .catch(this.handleError);
  }

  editComment(idCandidat: number): Promise<Commentaire[]> {
    return this.http.put(this._backendURL.oneComment.replace(':id', idCandidat), idCandidat)//`/api/candidats/?idCandidat=${idCandidat}`)
      .toPromise()
      .then(response => response.json().data as Commentaire[])
      .catch(this.handleError);
  }

  getCandidats(): Observable<candidat[]> {
    return this.http.get(this._backendURL.allCandidat)
      .map(res => res.json());
  }

  bannir(candidat: candidat) {//: Promise<Candidat[]> {
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

  suspend(candidat: candidat): Observable<candidat> {
    // console.log(this._backendURL.suspendCandidat.replace(':id', candidat.id));
    return this.http.get(this._backendURL.suspendCandidat.replace(':id', candidat.id))
      .map(res => res.json());
  }

  unSuspend(candidat: candidat): Observable<candidat> {
    return this.http.get(this._backendURL.unsuspendCandidat.replace(':id', candidat.id))
      .map(res => res.json());
  }

  delete(candidat: candidat){
    return this.http.delete(this._backendURL.deleteCandidat.replace(':id', candidat.id))
      .map(res => res.json());
  }

}

import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";

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

  matchingDossierCandidatCert(iddossier: number, idcandidat: number): Observable<any[]> {
    return this.http.get(this._backendURL.matchingDossierCandidatCert.replace(':iddossier', iddossier).replace(':idcandidat', idcandidat))
      .map(response => response.json())
      .catch(this.handleError);
  }

  matchingDossierCandidatComp(iddossier: number, idcandidat: number): Observable<any[]> {
    return this.http.get(this._backendURL.matchingDossierCandidatComp.replace(':iddossier', iddossier).replace(':idcandidat', idcandidat))
      .map(response => response.json())
      .catch(this.handleError);
  }

  matchingDossierCandidatForm(iddossier: number, idcandidat: number): Observable<any[]> {
    return this.http.get(this._backendURL.matchingDossierCandidatForm.replace(':iddossier', iddossier).replace(':idcandidat', idcandidat))
      .map(response => response.json())
      .catch(this.handleError);
  }

  matchingDossier(iddossier: number, borneinf: number, bornesup: number): Observable<any[]> {
    return this.http.get(this._backendURL.matchingDossier.replace(':iddossier', iddossier).replace(':borneinf', borneinf).replace(':bornesup', bornesup))
      .map(response => response.json())
      .catch(this.handleError);
  }


  getPosts(): Observable<Poste[]> {
    return this.http.get(this._backendURL.allPost)
      .map(response => response.json())
      .catch(this.handleError);
  }

  getPost(id: number): Observable<Poste[]> {
    return this.http.get(this._backendURL.onePost.replace(':idRecruteur', id))
      .map(res => res.json());
  }

  bannir(recruteur: Recruteur) {//: Promise<Candidat[]> {
    const requestOptions = {headers: new Headers({'Content-Type': 'application/json'})};
    return this.http
      .put(this._backendURL.banRecruteur.replace(':id', recruteur.id), recruteur, requestOptions)
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
        else {
          return [];
        }
      });
  }

  unBan(recruteur: Recruteur) {
    const requestOptions = {headers: new Headers({'Content-Type': 'application/json'})};
    return this.http
      .put(this._backendURL.unBanRecruteur.replace(':id', recruteur.id), recruteur, requestOptions)
      .map(res => {
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

  getRecruteur(id: number): Observable<Recruteur> {
    //const url = `${this.candidatsUrl}/${id}`;
    return this.http.get(this._backendURL.oneRecruteur.replace(':id', id))
      .map(res => res.json())
      .catch(this.handleError);
  }


  getActualRecruteur(): Observable<any> {
    return this.http.get(this._backendURL.oneRecruteur.replace(':id', localStorage.getItem("user")))
      .map((res: Response) => res.json()
      );
  }

  updateInfos(data: Recruteur): Observable<any> {
    console.log(data);
    return this.http.put(this._backendURL.updateRecruteur, JSON.stringify(data), this._options())
      .map((res: Response) => {
        if (res.status === 200) {
          return {
            "success": "success",
            "message": "modifications réussies"
          };
        }
        else {
          return {
            "success": "error",
            "message": "modifications échouées"
          };
        }
      });
  }

  findPost(id: string): Observable<any> {
    return this.http.get(this._backendURL.getPost.replace(':id', id))
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  updateMdp(data: any): Observable<any> {

    return this.http.put(this._backendURL.updateMdpRecruteur, JSON.stringify(data), this._options())
      .map((res: Response) => {
        if (res.status === 200) {
          return {
            "success": "success",
            "message": res.text()
          };
        }
        else {
          return {
            "success": "error",
            "message": res.text()
          };
        }
      });

  }


  getPhotoUrl(id: string): string {
    return this._backendURL.getPhotoCandidat.replace(':id', id);
  }

  uploadPhoto(c: FileList): Observable<string> {
    let formData: FormData = new FormData();
    formData.append('filedata', c[0], c[0].name);
    let headers = new Headers();
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post(this._backendURL.postPhotoCandidat, formData, new RequestOptions())
      .map((res) => res.json());

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

import { Component, OnInit, EventEmitter } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

import {Poste}    from '../interfaces/poste';
import {Savoir} from "../interfaces/savoir";
import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-poste-detail',
  templateUrl: 'poste-detail.component.html',
  styleUrls: ['poste-detail.component.css']
})
export class PosteDetailComponent implements OnInit {

  private _backendURL: any;

  private _poste : Poste ;
  private _poste_vide ;
  private _id ;


  constructor(private _route: ActivatedRoute, private _router: Router, private _http: Http) {

    this._backendURL = {};

    this._poste_vide = {
      reference: 'poste test ',
      intitule: 'test',
      indice_salaire: 'test',
      salaire_min: 0,
      salaire_max: 0,
      afficher_moyenne: 0,
      type_contrat: '',
      resume: '',
      point_attention: '',
      lieu_travail: '',
      organisation: '',
      equipe_concernee: '',

      savoir_specifications: [],
      savoir_faires: [],
      savoir_etres: [],
      metiers: [],
      fonctionnelles: [],
      techniques: [],
      langues: [],
      certifications: [],
      formations: []
    }

    this._poste =  this._poste_vide ;

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);

  }

  ngOnInit() {
    this._route.params.map((params: any) => params.id)
      .flatMap((id: string) => this._findPost(id))
      .subscribe( (poste: any) => {
        this._poste = poste;

      });


  }



  cancel() {
    this._router.navigate(['/dashboardRecruteur']);
  }


  get poste()  : Poste{
    return this._poste;
  }

  private _findPost(id: string): Observable<any> {
    return this._http.get(this._backendURL.getPost.replace(':id', id))
      .map( res => {
        if (res.status === 200) {

          return res.json();
        }
        else {
          return this._poste_vide;
        }
      });
  }

  private _options(headerList: Object = {}): RequestOptions {
    const headers = new Headers(Object.assign({'Content-Type': 'application/json'}, headerList));
    return new RequestOptions({headers: headers});
  }

}

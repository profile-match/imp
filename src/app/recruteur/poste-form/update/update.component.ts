import { Component, OnInit, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

import {Poste}    from '../../interfaces/poste';
import {Savoir} from "../../classes/savoir";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private _backendURL: any;

  private _poste : Poste ;
  private _poste_vide ;
  private _id ;


  constructor(private _route: ActivatedRoute, private _router: Router, private _http: Http) {

    this._backendURL = {};

    this._poste_vide = {
      reference: '',
      intitule: '',
      indice_salaire: '',
      salaire_min: 0,
      salaire_max: 0,
      afficher_moyenne: 0,
      type_contrat: '',
      resume: '',
      point_attention: '',
      lieu_travail: '',
      organisation: '',
      equipe_concernee: '',
      savoirSpe: [],
      savoirFaire:[],
      savoirEtre: [],
      metier: [],
      fonctionnelle: [],
      technique: [],
      linguistiques:[]
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

  submit(person: Poste) {
    console.log("submit");
    console.log(person);
    //TODO
  }

  cancel() {
    this._router.navigate(['/']);
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


}

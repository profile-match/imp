import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {environment} from '../../environments/environment';
import {Candidat} from "../interfaces/candidat";

@Component({
  selector: 'creer-candidat',
  templateUrl: './creer-profile-candidat.component.html'
})

export class CreerProfileCandidatComponent implements OnInit {

  private _data: any;
  private _format: any;
  private _comp: any[];
  private _exp: any;

  private _backendURL: any;

  private sex: boolean;

  private _model: Candidat;

  private _submit$: EventEmitter<any>;
  private _cancel$: EventEmitter<any>;
  private _isUpdateMode: boolean;

  public nom = "";
  public prenom = "";
  public email = "";
  public intitule_de_poste = "abcdef";
  public date_debut;
  public date_fin;
  public pays = "";
  public ville = "";
  public nom_entreprise = "";
  public description_entreprise = "";
  public missions_effectuees = "";
  public intitule_de_formation = "";
  public etablissement = "";
  public description_formation = "";
  public date_debut_format;
  public date_fin_format;
  public domaine_de_competence = "";
  public competences = "";
  public loisirs = "";

  ngOnInit(): void {
  }

  constructor(private _http: Http) {
    this._data = {};
    this._format = {};
    this._comp = [];
    this._exp = {};
    this._backendURL = {};
    this.sex = false;
    this._model = <Candidat>{};
    this._submit$ = new EventEmitter();
    this._cancel$ = new EventEmitter();
    this._isUpdateMode = false;

    // TY Jessel
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
      // build all backend urls
      Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
    }
  }

  @Output('submit') get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  get model(): Candidat {
    return this._model;
  }

  @Input() set model(value: Candidat) {
    this._model = value;
  }

  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  onSubmit(): void {
    if(this._isUpdateMode){
      this._submit$.emit(this._model);
    }
    else {

      this._data["nom"] = this.nom;
      this._data["prenom"] = this.prenom;
      this._data["email"] = this.email;
      this._data["loisirs"] = this.loisirs;
      this._data["isMale"] = this.sex;
      this._format["intitule_de_formation"] = this.intitule_de_formation;
      this._format["etablissement"] = this.etablissement;
      this._format["description_formation"] = this.description_formation;
      this._format["date_debut_format"] = this.date_debut_format;
      this._format["date_fin_format"] = this.date_fin_format;
      this._data["formation"] = this._format;
      this._comp[0] = {["domaine_de_competence"]: this.domaine_de_competence, ["competences"]: this.competences};
      this._data["competence"] = this._comp;
      this._exp["intitule_de_poste"] = this.intitule_de_poste;
      this._exp["date_debut"] = this.date_debut;
      this._exp["date_fin"] = this.date_fin;
      this._exp["pays"] = this.pays;
      this._exp["ville"] = this.ville;
      this._exp["nom_entreprise"] = this.nom_entreprise;
      this._exp["description_entreprise"] = this.description_entreprise;
      this._exp["missions_effectuees"] = this.missions_effectuees;
      this._data["experiencePro"] = this._exp;

      this._data = (JSON.stringify(this._data));

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json')

      this._http.post(this._backendURL.creerCandidat, this._data, {
        headers: headers
      }).subscribe();
    }
  };

  ngOnChanges(record){
    if(record.model && record.model.currentValue){
      this._model = record.model.currentValue;
      this._isUpdateMode = !!this._model;
    }
  }

  cancel(){
    this._cancel$.emit();
  }

}

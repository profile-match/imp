import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {environment} from '../../environments/environment';

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

    this.intitule_de_poste = "";
    this.date_debut;
    this.date_fin;
    this.pays = "";
    this.ville = "";
    this.nom_entreprise = "";
    this.description_entreprise = "";
    this.missions_effectuees = "";
    this.intitule_de_formation = "";
    this.etablissement = "";
    this.description_formation = "";
    this.date_debut_format;
    this.date_fin_format;
    this.domaine_de_competence = "";
    this.competences = "";
    this.loisirs = "";

    // TY Jessel
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
      // build all backend urls
      Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
    }
  }

  onSubmit(): void {

    this._data["nom"] = "Jean-claude";
    this._data["prenom"] = "Van damme";
    this._data["email"] = "oui@non.pe"
    this._data["loisirs"] = this.loisirs;
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
    headers.append('Accept','application/json')

    this._http.post(this._backendURL.creerCandidat, this._data, {
      headers: headers
    }).subscribe();
    // this._http.post(this._backendURL.creerCandidat, this._data, {
    //   headers: headers
    // }).subscribe();
  };

}

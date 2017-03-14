import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {RecruteurService} from "../../shared/service/recruteur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Poste} from "../interfaces/poste";
import {candidat} from "../../Candidat/interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";


@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  private _iddossier: number;
  private _idcandidat: number;
  private _cand: candidat;
  private _dossier: Poste;
  private _certifications: any[];
  private _formations: any[];
  private _competences: any[];


  constructor(private _serviceCandidat: CandidatService, private _location: Location, private _service: RecruteurService, private _route: ActivatedRoute, private _router: Router) {

    this._certifications = [];
    this._formations = [];
    this._competences = [];
    this._cand = {
      id: 0,
      email: '',
      banned: 0,
      loisirs: '',
      nom: '',
      naissance: '',
      isMale: true,
      suspended: true,
      photo: '',
      prenom: '',
      avis:[],
      adresse: '',
      telfix: '',
      telperso: '',
      experiencePro: [],
      formation: [],
      competence: [],
      certifications: [],
      listDossier: []
    };

    this._dossier = {
      id: 0,
      id_recruteur: 0,
      date_publication: 0,
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
      savoir_specifications: [],
      savoir_faires: [],
      savoir_etres: [],
      metiers: [],
      fonctionnelles: [],
      techniques: [],
      langues: [],
      certifications: [],
      formations: [],
      listeCandidat: []
    }
  }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this._iddossier = params['iddossier'];
        this._idcandidat = params['idcandidat'];
        this._service.findPost(this._iddossier + "").subscribe((poste: Poste) => this._dossier = poste);
        this._serviceCandidat.getCandidat(this._idcandidat + "").subscribe((cand: candidat) => this.cand = cand);
        this._service.matchingDossierCandidatComp(this._iddossier, this._idcandidat).subscribe(
          (res: any[]) => {
            this._competences = res;
          });
        this._service.matchingDossierCandidatCert(this._iddossier, this._idcandidat).subscribe(
          (res: any[]) => {
            this._certifications = res;
          });
        this._service.matchingDossierCandidatForm(this._iddossier, this._idcandidat).subscribe(
          (res: any[]) => {
            this._formations = res;
          });

      });

  }

  backClicked() {

  }

  linkCandidat() {
    //TODO cloturer l'offre et ajouter le candidat en tant que candidat embauché
    this._serviceCandidat.updateCandidatPost(this.cand,this.dossier.id).subscribe(res =>   this._location.back());
    this._location.back();
  }

  get serviceCandidat(): CandidatService {
    return this._serviceCandidat;
  }

  set serviceCandidat(value: CandidatService) {
    this._serviceCandidat = value;
  }

  get location(): Location {
    return this._location;
  }

  set location(value: Location) {
    this._location = value;
  }

  get service(): RecruteurService {
    return this._service;
  }

  set service(value: RecruteurService) {
    this._service = value;
  }

  get route(): ActivatedRoute {
    return this._route;
  }

  set route(value: ActivatedRoute) {
    this._route = value;
  }

  get router(): Router {
    return this._router;
  }

  set router(value: Router) {
    this._router = value;
  }

  get iddossier(): number {
    return this._iddossier;
  }

  set iddossier(value: number) {
    this._iddossier = value;
  }

  get idcandidat(): number {
    return this._idcandidat;
  }

  set idcandidat(value: number) {
    this._idcandidat = value;
  }


  get cand(): candidat {
    return this._cand;
  }

  set cand(value: candidat) {
    this._cand = value;
  }

  get dossier(): Poste {
    return this._dossier;
  }

  set dossier(value: Poste) {
    this._dossier = value;
  }

  get certifications(): any[] {
    return this._certifications;
  }

  set certifications(value: any[]) {
    this._certifications = value;
  }

  get formations(): any[] {
    return this._formations;
  }

  set formations(value: any[]) {
    this._formations = value;
  }

  get competences(): any[] {
    return this._competences;
  }

  set competences(value: any[]) {
    this._competences = value;
  }
}

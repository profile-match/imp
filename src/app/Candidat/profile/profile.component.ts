import {Component, OnInit} from '@angular/core';
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {formation} from "../interfaces/formation";
import {experience} from "../interfaces/experience";
import {competence} from "../interfaces/competence";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-candidat',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileCandidatComponent implements OnInit {

  private _candidat: candidat;
  private _dialogStatus: string;
  private _id: string;

  constructor(private _route: ActivatedRoute, private _candidatService: CandidatService) {
    this._dialogStatus = 'inactive';
    this._candidat = {id:-1,
      nom:"",
      prenom:"",
      email:"",
      loisirs:"",
      photo:"",
      adresse:"",
      telfix:"",
      telperso:"",
      experiencePro: [{
        id:-1,
        intitule_de_poste: "",
        date_debut: "",
        date_fin: "",
        pays: "",
        ville: "",
        nom_entreprise: "",
        description_entreprise: "",
        missions_effectuees: ""
      }],
      formation: [{
        id:-1,
        intitule_de_formation: "",
        etablissement: "",
        description_formation: "",
        date_debut_format: "",
        date_fin_format: ""
      }],
      competence: [{
        id:-1,
        type: 0,
        competence: ""
      }],
      isMale: false,
      banned: false,
      suspended: false
    };
    this._id = "";
  }

  ngOnInit() {
    this._route.params
      .map((params: any) => params.id)
      .subscribe((id: string) => {
        this._id = id;
      });

    this._candidatService.getCandidat(this._id).subscribe(
      (candidat: candidat) => {
        this._candidat = candidat;
      });
  }

  get candidat(): candidat {
    return this._candidat;
  }

  // set Candidat(value: Candidat) {
  //   this._candidat = value;
  // }

  get _candidatName(): string {
    return this._candidat.nom;
  }

  get _candidatFName(): string {
    return this._candidat.prenom;
  }

  get _candidatId(): number {
    return this._candidat.id;
  }

  get _candidatAddress():string{
    return this._candidat.adresse;
  }

  get _candidatEmail(): string {
    return this._candidat.email;
  }

  get _candidatPhoneFix():string{
    return this._candidat.telfix;
  }

  get _candidatPhoneMobile():string{
    return this._candidat.telperso;
  }

  get _candidatPhoto():any{
    return this._candidat.photo;
  }

  get _candidatFormations():formation[]{
    return this._candidat.formation;
  }

  get _candidatExperiences():experience[]{
    return this._candidat.experiencePro;
  }

  get _candidatCompetences():competence[]{
    return this._candidat.competence;
  }

  get _candidatSuspended(): boolean {
    return this._candidat.suspended;
  }

  suspendCandidat(c: candidat) {
    this._candidatService.suspend(c).subscribe(
      (cdd: candidat) => {
      this._candidat = cdd;
    });
  }

  unsuspendCandidat(c: candidat){
    this._candidatService.unSuspend(c).subscribe(
      (cdd: candidat) => {
      this._candidat = cdd;
    });
  }

  get dialogStatus(): string {
    return this._dialogStatus
  }

  showDialog() {
    this._dialogStatus = 'active';
  }

  hideDialog() {
    this._dialogStatus = 'inactive';
  }

}

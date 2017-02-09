import {Component, OnInit} from '@angular/core';
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {formation} from "../interfaces/formation";
import {experience} from "../interfaces/experience";
import {competence} from "../interfaces/competence";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'

@Component({
  selector: 'app-profile-candidat',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileCandidatComponent implements OnInit {

  private _candidat: candidat;
  private _dialogStatus: string;

  constructor(private _candidatService: CandidatService) {
    this._dialogStatus = 'inactive';
    this._candidat = {id:-1,
      nom:"ROBERT",
      prenom:"JACQUES",
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
        date_debut: "",
        date_fin: ""
      }],
      competence: [{
        id:-1,
        domaine_de_competence: "",
        competences: ""
      }],
      isMale: false,
      banned:false
    };
  }

  ngOnInit() {
    this._candidatService.getCandidat(73).subscribe(
      (candidat: candidat) => {
        console.log(candidat);
        this._candidat = candidat
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

  get _candidatFormations():formation[]{
    return this._candidat.formation;
  }

  get _candidatExperiences():experience[]{
    return this._candidat.experiencePro;
  }

  get _candidatCompetences():competence[]{
    return this._candidat.competence;
  }

  get _candidatBanned(): boolean {
    return this._candidat.banned;
  }

  setCandidatBanned(bool: boolean) {
    this._candidat.banned = bool;
  }

  get dialogStatus(): string {
    return this._dialogStatus
  }

  /**
   * Function to display modal
   */
  showDialog() {
    this._dialogStatus = 'active';
  }

  /**
   * Function to hide modal
   */
  hideDialog() {
    this._dialogStatus = 'inactive';
  }

}

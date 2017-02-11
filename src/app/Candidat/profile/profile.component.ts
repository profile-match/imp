import {Component, OnInit} from '@angular/core';
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {formation} from "../interfaces/formation";
import {competence} from "../interfaces/competence";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {ActivatedRoute} from "@angular/router";
import {experiencePro} from "../interfaces/experiencePro";

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
    this.candidat = {};
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

  get candidat(): any {
    return this._candidat;
  }

  set candidat(candidat:any) {
    this._candidat = candidat;
  }

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

  get _candidatExperiences():experiencePro[]{
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

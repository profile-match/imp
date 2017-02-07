import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {Candidat} from "../interfaces/candidat";
import {CandidatService} from "../shared/candidat.service";
import {competence} from "../interfaces/competence";

@Component({
  selector: 'creer-profile-candidat',
  templateUrl: './creer-profile-candidat.component.html',
  styleUrls: ['./creer-profile-candidat.component.css']
})

export class CreerProfileCandidatComponent implements OnInit {

  private _candidat: Candidat;

  private _compet: string;

  private _propositions_competences: string[];

  constructor(private _candidatService: CandidatService) {

    this.candidat = {};
    this.candidat.experiencePro = {};
    this.candidat.formation = {};
    this.candidat.competence = [];

    this._propositions_competences = [];
  }

  onSubmit() {
    this._candidatService.createCandidat(this.candidat).subscribe();
    console.log(this.candidat);
  }

  addCompetence(competence: competence) {
    if (this.candidat.competence.indexOf(competence) == -1) {
      this.candidat.competence.push(competence);
      this.compet = "";
    }
    this.propositions_competences = [];
  }

  deleteComp(competence: string) {
    this.candidat.competence.splice(this.candidat.competence.indexOf(competence), 1);
    this.propositions_competences = [];
  }

  autoCompleteCompetences(s: string) {
    if (s != "") {
      this._candidatService.getCompetences(s).subscribe((result: string[]) => {
        this.propositions_competences = result;
      });

    } else {
      this.propositions_competences = [];
    }
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  get candidat(): any {
    return this._candidat;
  }

  set candidat(value: any) {
    this._candidat = value;
  }

  get propositions_competences(): string[] {
    return this._propositions_competences;
  }

  set propositions_competences(value: string[]) {
    this._propositions_competences = value;
  }

  get compet(): string {
    return this._compet;
  }

  set compet(value: string) {
    this._compet = value;
  }

}

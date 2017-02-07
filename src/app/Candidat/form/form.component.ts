import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {CandidatService} from "../../shared/candidat.service";
import {competence} from "../../interfaces/competence";
import {candidat} from "../../interfaces/candidat";

@Component({
  selector: 'form-candidat',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  private _create$: EventEmitter<any>;

  private _candidat: candidat;

  private _compet: string;

  private _propositions_competences: string[];

  constructor(private _candidatService: CandidatService) {

    this._create$ = new EventEmitter();

    this.candidat = {};
    this.candidat.experiencePro = {};
    this.candidat.formation = {};
    this.candidat.competence = [];

    this._propositions_competences = [];
  }

  @Output("createCandidat") get create$(): EventEmitter<any> {
    return this._create$;
  }

  set create$(value: EventEmitter<any>) {
    this._create$ = value;
  }

  onSubmit() {
    this._create$.emit(this.candidat);

    // this._candidatService.createCandidat(this.candidat).subscribe();
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

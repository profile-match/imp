import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
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
  private _format: string;

  private _isUpdateMode: boolean;

  private _propositions_competences: string[];

  constructor(private _candidatService: CandidatService) {

    this._create$ = new EventEmitter();
    this._candidat = <candidat>{};

    this.candidat = {};
    this.candidat.experiencePro = {};
    this.candidat.formation = [];
    this.candidat.competence = [];

    this._propositions_competences = [];
    this._isUpdateMode = false;
  }

  @Output("createCandidat") get create$(): EventEmitter<any> {
    return this._create$;
  }

  onSubmit() {
    this._create$.emit(this.candidat);
  }

  addCompetence(competence: competence) {
    if (competence) {
      if (this.candidat.competence.indexOf(competence) == -1) {
        this.candidat.competence.push(competence);
        this.compet = "";
      }
    }
    this.propositions_competences = [];
  }

  deleteComp(competence: string) {
    this.candidat.competence.splice(this.candidat.competence.indexOf(competence), 1);
    this.propositions_competences = [];
  }

  addForm(competence: competence) {
    if (this.candidat.competence.indexOf(competence) == -1) {
      this.candidat.competence.push(competence);
      this.compet = "";
    }

    this.propositions_competences = [];
  }

  deleteForm(competence: string) {
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

  ngOnChanges(record) {
    if(record.candidat && record.candidat.currentValue){
      this._candidat = record.candidat.currentValue;
      this._isUpdateMode = !!this._candidat;
    }
  }

  get candidat(): any {
    return this._candidat;
  }

  @Input() set candidat(value: candidat) {
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

  get format(): string {
    return this._format;
  }

  set format(value: string) {
    this._format = value;
  }

  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  set isUpdateMode(value: boolean) {
    this._isUpdateMode = value;
  }
}

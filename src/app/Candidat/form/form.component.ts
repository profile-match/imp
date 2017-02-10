import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {CandidatService} from "../../shared/candidat.service";
import {competence} from "../../interfaces/competence";
import {candidat} from "../../interfaces/candidat";
import {formation} from "../../interfaces/formation";
import {experiencePro} from "../../interfaces/experiencePro";

@Component({
  selector: 'form-candidat',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  private _isUpdateMode: boolean;

  private _profile$: EventEmitter<any>;

  private _candidat: candidat;

  private _compet: string;

  private _formation1: string;
  private _formation2: string;
  private _formation3: string;
  private _formation4: string;
  private _formation5: string;

  private _experience1: string;
  private _experience2: string;
  private _experience3: string;
  private _experience4: string;
  private _experience5: string;
  private _experience6: string;
  private _experience7: string;
  private _experience8: string;

  private _comp_select: string;

  private _propositions_competences: string[];

  constructor(private _candidatService: CandidatService) {

    this._isUpdateMode = false;

    this._profile$ = new EventEmitter();

    this.candidat = {};
    this.candidat.experiencePro = [];
    this.candidat.formation = [];
    this.candidat.competence = [];
    this._propositions_competences = [];

    this.clearFormationForm();
    this.clearExperienceForm();

    this.comp_select = "0";
  }

  @Output("submit") get create$(): EventEmitter<any> {
    return this._profile$;
  }

  onSubmit() {
    console.log(this.candidat);
    this._profile$.emit(this.candidat);
  }

  setSex(b: boolean) {
    this.candidat.isMale = b;
  }

  addCompetence(competence: string, type:string) {
    const comp = {
      "competence": competence,
      "type":type
    };

    console.log(comp);

    if (competence) {
      console.log(this.candidat.competence.indexOf(comp) == -1);
      if (this.candidat.competence.indexOf(comp) == -1) {
        this.candidat.competence.push(comp);
        this.compet = "";
      }
    }
    this.propositions_competences = [];
  }

  deleteComp(competence: competence) {
    this.candidat.competence.splice(this.candidat.competence.indexOf(competence), 1);
    this.propositions_competences = [];
  }

  addFormation() {

    if (this.formation1 != "" && this.formation2 != "" && this.formation3 != "" &&
      this.formation4 != "" && this.formation5 != "") {

      const formation = {
        "intitule_de_formation": this.formation1,
        "etablissement": this.formation2,
        "description_formation": this.formation3,
        "date_debut_format": this.formation4,
        "date_fin_format": this.formation5
      };

      if (this.candidat.formation.indexOf(formation) == -1) {
        this.candidat.formation.push(formation);
        this.clearFormationForm();
      }
    }
  }

  deleteExperience(experiencePro: experiencePro) {
    this.candidat.experiencePro.splice(this.candidat.experiencePro.indexOf(experiencePro), 1);
  }

  addExperience() {

    if (this.experience1 != "", this.experience2 != "", this.experience3 != "", this.experience4 != "",
      this.experience5 != "", this.experience6 != "", this.experience7 != "", this.experience8 != "") {

      const experiencePro = {
        "intitule_de_poste": this.experience1,
        "date_debut": this.experience2,
        "date_fin": this.experience3,
        "pays": this.experience4,
        "ville": this.experience5,
        "nom_entreprise": this.experience6,
        "description_entreprise": this.experience7,
        "missions_effectuees": this.experience8
      };

      if (this.candidat.experiencePro.indexOf(experiencePro) == -1) {
        this.candidat.experiencePro.push(experiencePro);
        this.clearExperienceForm();
      }
    }

  }

  deleteFormation(formation: formation) {
    this.candidat.formation.splice(this.candidat.formation.indexOf(formation), 1);
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

  clearFormationForm() {
    this._formation1 = "";
    this._formation2 = "";
    this._formation3 = "";
    this._formation4 = "";
    this._formation5 = "";
  }

  clearExperienceForm() {
    this._experience1 = "";
    this._experience2 = "";
    this._experience3 = "";
    this._experience4 = "";
    this._experience5 = "";
    this._experience6 = "";
    this._experience7 = "";
    this._experience8 = "";
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to handle component update
   *
   * @param record
   */
  ngOnChanges(record) {
    if (record.model && record.candidat.currentValue) {
      this._candidat = record.candidat.currentValue;
    }
  }

  get candidat(): any {
    return this._candidat;
  }

  @Input() set candidat(value: any) {
    this._candidat = value;
  }

  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  @Input() set isUpdateMode(value: boolean) {
    this._isUpdateMode = value;
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

  get formation5(): string {
    return this._formation5;
  }

  set formation5(value: string) {
    this._formation5 = value;
  }

  get formation4(): string {
    return this._formation4;
  }

  set formation4(value: string) {
    this._formation4 = value;
  }

  get formation3(): string {
    return this._formation3;
  }

  set formation3(value: string) {
    this._formation3 = value;
  }

  get formation2(): string {
    return this._formation2;
  }

  set formation2(value: string) {
    this._formation2 = value;
  }

  get formation1(): string {
    return this._formation1;
  }

  set formation1(value: string) {
    this._formation1 = value;
  }

  get experience1(): string {
    return this._experience1;
  }

  get comp_select(): string {
    return this._comp_select;
  }

  set comp_select(value: string) {
    this._comp_select = value;
  }

  set experience1(value: string) {
    this._experience1 = value;
  }

  get experience2(): string {
    return this._experience2;
  }

  set experience2(value: string) {
    this._experience2 = value;
  }

  get experience3(): string {
    return this._experience3;
  }

  set experience3(value: string) {
    this._experience3 = value;
  }

  get experience4(): string {
    return this._experience4;
  }

  set experience4(value: string) {
    this._experience4 = value;
  }

  get experience5(): string {
    return this._experience5;
  }

  set experience5(value: string) {
    this._experience5 = value;
  }

  get experience6(): string {
    return this._experience6;
  }

  set experience6(value: string) {
    this._experience6 = value;
  }

  get experience7(): string {
    return this._experience7;
  }

  set experience7(value: string) {
    this._experience7 = value;
  }

  get experience8(): string {
    return this._experience8;
  }

  set experience8(value: string) {
    this._experience8 = value;
  }

}

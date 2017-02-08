import {Component, OnInit, Input} from '@angular/core';
import {candidat} from "../../interfaces/candidat";
import {competence} from "../../interfaces/competence";

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  private _candidat: candidat;

  constructor() {
    // this.Candidat = PROFILE;
  }

  ngOnInit() {
  }

  get candidat(): candidat {
    return this._candidat;
  }

  @Input() set candidat(value: candidat) {
    this._candidat = value;
  }

  get candidatCompetences(): competence[] {
    return this._candidat.competence;
  }

}

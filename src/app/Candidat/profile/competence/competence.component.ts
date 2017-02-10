import {Component, OnInit, Input} from '@angular/core';
import {competence} from "../../interfaces/competence";

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  private _competences: competence[];

  constructor() {
    this._competences = [];
  }

  ngOnInit() {
  }

  get competences(): competence[] {
    return this._competences;
  }

  @Input() set competences(value: competence[]) {
    console.log(value);
    this._competences = value;
  }

}

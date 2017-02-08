import {Component, OnInit, Input} from '@angular/core';
import {candidat} from "../../interfaces/candidat";
import {formation} from "../../interfaces/formation";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

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

  get candidatFormation(): formation {
    return this._candidat.formation;
  }

}

import {Component, OnInit, Input} from '@angular/core';
import {formation} from "../../interfaces/formation";

@Component({
  selector: 'app-formation-candidat',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationCandidatComponent implements OnInit {

  private _formations: formation[];

  constructor() {
    this._formations = [];
  }

  ngOnInit() {
  }

  get formations(): formation[] {
    return this._formations;
  }

  @Input() set formations(value: formation[]) {
    this._formations = value;
  }

}

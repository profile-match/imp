import {Component, OnInit, Input} from '@angular/core';
import {formation} from "../../interfaces/formation";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

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
    console.log(value);
    this._formations = value;
  }

}

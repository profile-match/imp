import {Component, OnInit, Input} from '@angular/core';
import {Candidat} from "../../../candidat/interfaces/candidat";

@Component({
  selector: 'app-candidat-detail',
  templateUrl: './candidat-detail.component.html',
  styleUrls: ['./candidat-detail.component.css']
})
export class CandidatDetailComponent implements OnInit {

   private _candidat: Candidat;

  constructor() { }

  ngOnInit() {
  }

  get candidat(): Candidat {
    return this._candidat;
  }

  @Input() set candidat(value: Candidat) {
    this._candidat = value;
  }

}

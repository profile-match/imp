import {Component, OnInit, Input} from '@angular/core';
import {Poste} from "../interfaces/poste";


@Component({
  selector: 'app-card-poste',
  templateUrl: 'card-poste.component.html'

})
export class CardPosteComponent implements OnInit {
  private _poste :Poste;
  constructor() {

    this.poste = {}

  }

  get poste(): any {
    return this._poste;
  }

  @Input() set poste(value: any) {
    this._poste = value;
  }

  ngOnInit() {
  }

}

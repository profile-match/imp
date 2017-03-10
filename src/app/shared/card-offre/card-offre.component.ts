import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Poste} from "../../recruteur/interfaces/poste";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-card-offre',
  templateUrl: 'card-offre.component.html'

})
export class CardOffreComponent implements OnInit {
  private _poste :Poste;
  private _postulation$: EventEmitter<any>;

  constructor() {
    this.poste = {}
    this._postulation$ = new EventEmitter();
  }

  @Output("postuler") get postuler$(): EventEmitter<any> {
    return this._postulation$;
  }

  onSubmit() {
    this._postulation$.emit(this.poste);
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

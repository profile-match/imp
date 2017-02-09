import {Component, OnInit, Input} from '@angular/core';
import {Poste} from "../Classes/poste";


@Component({
  selector: 'app-card-poste',
  templateUrl: 'card-poste.component.html',
  providers:[Poste]

})
export class CardPosteComponent implements OnInit {
  private _poste :Poste;
  constructor() {

    this._poste=new Poste();
    this._poste.reference="ME1452367";
    this._poste.intitule="Expert Système (H/F)";
    this._poste.date_publication=2016;
    this._poste.type_contrat="CDI";
    this._poste.resume="De formation en informatique, vous bénéficiez d'une expérience d'au moins 5 ans sur un poste similaire...";

  }

  get poste(): Poste {
    return this._poste;
  }

  @Input() set poste(value: Poste) {
    this._poste = value;
  }

  ngOnInit() {
  }

}

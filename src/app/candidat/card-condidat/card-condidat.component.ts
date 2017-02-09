import {Component, OnInit, Input} from '@angular/core';

import {Candidat} from "../class/candidat";

@Component({
  selector: 'app-card-condidat',
  templateUrl: 'card-condidat.component.html',
  providers:[Candidat]


})
export class CardCondidatComponent implements OnInit {

  private _candidat:Candidat;

  constructor() {
     this._candidat=new Candidat();
      this._candidat.nom="AZAMI";
      this._candidat.prenom="Faical";
      this._candidat.email="azami@gmail.com";
      this._candidat.competence="JAVA/JEE";
      this._candidat.formation="Ingénieur en Developpement web";
      this._candidat.photo="http://www.nale.ch/img/profile.jpg";

    }


  get candidat(): Candidat {
    return this._candidat;
  }

 @Input() set candidat(value: Candidat) {
    this._candidat = value;
  }

  ngOnInit() {
  }

}

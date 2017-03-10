import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  constructor(private _location: Location) {
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  linkCandidat(){
    //TODO cloturer l'offre et ajouter le candidat en tant que candidat embauché

  }
}

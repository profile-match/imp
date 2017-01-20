import { Component, OnInit } from '@angular/core';

import {OffreComponent} from './offre.component';
import {Offre} from './offre';


@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styles: []
})
export class OffreDetailComponent implements OnInit {



  constructor(private offreComponent: OffreComponent) { }
  offreDetail: Offre = this.offreComponent.selectedOffre;

 myFunction() {
  	console.log(this.offreComponent.selectedOffre);
  }

  ngOnInit() {
  }

}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						
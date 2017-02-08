import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {OffreComponent} from './offre.component';
import {Offre} from './offre';


@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styles: []
})
export class OffreDetailComponent implements OnInit {
    constructor(private offreComponent: OffreComponent, private route: ActivatedRoute, private router: Router) { }
    offreDetail: Offre = this.offreComponent.selectedOffre;
    //Fontion test just to test the value of selectedOffre
    myFunction() {
  	    console.log(this.offreComponent.selectedOffre);
     }
  ngOnInit() {
  }

}

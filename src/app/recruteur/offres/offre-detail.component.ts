import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {OffreComponent} from './offre.component';
import {Poste} from '../interfaces/poste';


@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styles: []
})
export class OffreDetailComponent implements OnInit {
  constructor(private offreComponent: OffreComponent, private route: ActivatedRoute, private router: Router) {
  }

  offreDetail: Poste = this.offreComponent.selectedOffre;

  ngOnInit() {
  }

}

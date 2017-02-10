import { Component, OnInit } from '@angular/core';
import {OffersService} from '../shared/offers-service/offers.service';
import  {Offre} from './offre';
import {Router} from "@angular/router";
import {Candidat} from  '../candidats/candidat';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
  providers: [OffersService]
})

export class OffreComponent implements OnInit {

  newOffre: Offre = new Offre();
  _selectedOffre: Offre = new Offre();
  _selectedCandidats: Candidat[] = [];
  private _testOffreList: Offre[]=[];


  constructor(private offreService: OffersService, private router: Router) {
  }



  set selectedOffre(offre: Offre){
    this._selectedOffre = offre;
    this._selectedCandidats = offre.candidats;
  }
  //Return the offer which was selected by the user, recruiter, in this case.
  get selectedOffre() : Offre{
    return this._selectedOffre;
  }

  //Return the list of appliers for the selected offer.
  get selectedCandidats(): Candidat[]{
    return this._selectedCandidats;
  }

  ngOnInit() {
    this.offreService.fetch().subscribe((offers: any[]) => this._testOffreList = offers);
  }

}

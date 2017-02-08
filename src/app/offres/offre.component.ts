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

  //candidats used to test
  c1: Candidat = new Candidat({id: 0, photo: 'non disponible' ,nom: 'nom1', prenom: 'prenom1',lien: 'lien1', contact:'contact1'});
  c2: Candidat = new Candidat({id: 1, photo: 'non disponible' ,nom: 'nom2', prenom: 'prenom2',lien: 'lien2', contact:'contact2'});
  c3: Candidat = new Candidat({id: 2, photo: 'non disponible' ,nom: 'nom3', prenom: 'prenom3',lien: 'lien3', contact:'contact3'});
  c4: Candidat = new Candidat({id: 3, photo: 'non disponible' ,nom: 'nom4', prenom: 'prenom4',lien: 'lien4', contact:'contact4'});
  c5: Candidat = new Candidat({id: 4, photo: 'non disponible' ,nom: 'nom5', prenom: 'prenom5',lien: 'lien5', contact:'contact5'});
  c6: Candidat = new Candidat({id: 5, photo: 'non disponible' ,nom: 'nom6', prenom: 'prenom6',lien: 'lien6', contact:'contact6'});
  c7: Candidat = new Candidat({id: 6, photo: 'non disponible' ,nom: 'nom7', prenom: 'prenom7',lien: 'lien7', contact:'contact7'});
  c8: Candidat = new Candidat({id: 7, photo: 'non disponible' ,nom: 'nom8', prenom: 'prenom8',lien: 'lien8', contact:'contact8'});
  c9: Candidat = new Candidat({id: 8, photo: 'non disponible' ,nom: 'nom9', prenom: 'prenom9',lien: 'lien9', contact:'contact9'});
  c10: Candidat = new Candidat({id: 9, photo: 'non disponible' ,nom: 'nom10', prenom: 'prenom10',lien: 'lien10', contact:'contact10'});

  //offres used to test
  offre1: Offre = new Offre({id:0, poste: 'Ingénieur JEE', experience: '5 ans', contrat: 'CDI', lieu: 'Marseille', contact: 'xyz@gmail.com', disponibilite: '12/01/2017', discription: '...', info: '...', candidats: [this.c1, this.c2, this.c3, this.c8]});
  offre2: Offre = new Offre({id:1, poste: 'Ingénieur PHP', experience: '3 ans', contrat: 'CDD', lieu: 'Lille', contact: 'hgf@gmail.com', disponibilite: '12/02/2017', discription: '...', info: '...', candidats: [this.c4, this.c5, this.c6]});
  offre3: Offre = new Offre({id:2, poste: 'Développeur JavaScript', experience: '1 ans',contrat: 'CDI', lieu: 'Paris', contact: 'ooo@gmail.com', disponibilite: '05/08/2017', discription: '...', info: '...', candidats: [this.c7, this.c8, this.c9]});
  offre4: Offre = new Offre({id:3, poste: 'Architecte logiciel', experience: '6 ans', contrat: 'CDD', lieu: 'Nantes', contact: 'kkk@gmail.com', disponibilite: '18/07/2017', discription: '...', info: '...', candidats: [this.c10, this.c2, this.c3]});
  offre5: Offre = new Offre({id:4, poste: 'Expert Big Data', experience: '10 ans', contrat: 'CDI', lieu: 'Lyon', contact: 'jgkgfd@gmail.com', disponibilite: '21/09/2017', discription: '...', info: '...', candidats: []});

  constructor(private offreService: OffersService, private router: Router) { }

  testOffreList: Offre[]=[this.offre1, this.offre2, this.offre3, this.offre4, this.offre5];


  set selectedOffre(offre: Offre){
    this._selectedOffre = offre;
    this._selectedCandidats = offre.candidats;
    console.log(this._selectedOffre);
    console.log(this._selectedCandidats);
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
    //this._OffersService.fetch().subscribe((offers: any[]) => this._offersList = offers);
  }

}

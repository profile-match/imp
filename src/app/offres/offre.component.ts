import { Component, OnInit } from '@angular/core';
import {OffreService} from './offre.service';
import  {Offre} from './offre';



@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'], //We will change this style cheet with the template that we choose.
  providers: [OffreService]
})

export class OffreComponent implements OnInit {

	testExpression = 'Hello Ahmed';

  newOffre: Offre = new Offre();
  _selectedOffre: Offre = new Offre();
  offre1: Offre = new Offre({id:0, poste: 'Ingénieur JEE', experience: '5 ans', contrat: 'CDI', lieu: 'Marseille', contact: 'xyz@gmail.com', disponibilite: '12/01/2017', discription: '...', info: '...'});
  offre2: Offre = new Offre({id:1, poste: 'Ingénieur PHP', experience: '3 ans', contrat: 'CDD', lieu: 'Lille', contact: 'hgf@gmail.com', disponibilite: '12/02/2017', discription: '...', info: '...'});
  offre3: Offre = new Offre({id:2, poste: 'Développeur JavaScript', experience: '1 ans',contrat: 'CDI', lieu: 'Paris', contact: 'ooo@gmail.com', disponibilite: '05/08/2017', discription: '...', info: '...'});
  offre4: Offre = new Offre({id:3, poste: 'Architecte logiciel', experience: '6 ans', contrat: 'CDD', lieu: 'Nantes', contact: 'kkk@gmail.com', disponibilite: '18/07/2017', discription: '...', info: '...'});
  offre5: Offre = new Offre({id:4, poste: 'Expert Big Data', experience: '10 ans', contrat: 'CDI', lieu: 'Lyon', contact: 'jgkgfd@gmail.com', disponibilite: '21/09/2017', discription: '...', info: '...'});
  
  constructor(private offreService: OffreService) { }

  testOffreList: Offre[]=[this.offre1, this.offre2, this.offre3, this.offre4, this.offre5];

  test(){
    alert('ok');
  }

  set selectedOffre(offre: Offre){
    this._selectedOffre = offre;
    console.log(this._selectedOffre);
  }

  get selectedOffre() : Offre{
    return this._selectedOffre;
  }





  addOffre(){
  	this.offreService.addOffre(this.newOffre);
  	this.newOffre = new Offre();
  }

  removeOffre(offre){
  	this.offreService.deleteOffreById(offre.id);
  }
  //updateOffre(){}
  get offreList(){
  	return this.offreService.getAllOffres();
  }

  


  ngOnInit() {
  }

}

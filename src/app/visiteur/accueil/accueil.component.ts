import {Component, OnInit} from '@angular/core';

import {CandidatService} from "../../shared/service/candidat.service";
import {Candidat} from "../../candidat/interfaces/candidat";
import {RecruteurService} from "../../shared/service/recruteur.service";
import {Recruteur} from "../../recruteur/interfaces/recruteur";
import {Poste} from "../../recruteur/interfaces/poste";
import {Comment} from "../../candidat/interfaces/commentaire";
import {Http} from "@angular/http";

@Component({
  selector: 'app-accueil',
  providers: [CandidatService],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit{

  private candidats: Candidat[];
  private recruteurs: Recruteur[];
  private postes: Poste[];
  private comments: Comment[];

  nbCountries: string;
  views: string;
  public countriesList = [
    {name:"France", value:"33"},
    {name:"Germany", value:"27"},
    {name:"United States", value:"16"},
    {name:"Spain", value:"11"},
    {name:"Britain", value:"10"}
  ];

  private menuList : any[];

  constructor(private http: Http, private candidatService: CandidatService, private recruteurService : RecruteurService) {
    this.views = '127';
    this.nbCountries = '60';
    this.candidats = [{id: 11, email: 'nice', banned:0, loisirs: 'ni', nom: "test", photo:"", prenom: 'Mr. Nice', experiencePro: 'd', formation:'d', competence:[]}];
    this.recruteurs = [];
    this.postes = [];
    this.comments = [];
    this.menuList = [];
  }

  getCandidats(): void {
    this.candidatService.getCandidats().subscribe(candidats => this.candidats = candidats);
    console.log(JSON.stringify(this.candidats));
  }

  getComments(): void {
    this.candidatService.getComments().then(com => this.comments = com);
  }

  getRecruteurs(): void {
    this.recruteurService.getRecruteurs().then(recruteurs => this.recruteurs = recruteurs);
  }

  getPostes(): void {
    this.recruteurService.getPosts().then(postes => this.postes = postes);
  }

  ngOnInit(): void {
    this.getCandidats();
 /*   this.getRecruteurs();
    this.getPostes();
    this.getComments();
    this.setMenuList();*/
  }

  setMenuList() : void {
  //  alert(this.candidats.length);
    this.menuList = [
      {name:"Totale candidats", value:''+this.candidats.length, croissance:"15", positive:"true"},
      {name:"Totale recruteurs", value:"27", croissance:"10", positive:"true"},
      {name:"Nombres postes à pouvoir", value:"16", croissance:"20", positive:"true"},
      {name:"Nombres de filles", value:"19", croissance:"20", positive:"false"},
      {name:"Connexions totale", value:"10", croissance:"12", positive:"true"}
    ];
  }
}

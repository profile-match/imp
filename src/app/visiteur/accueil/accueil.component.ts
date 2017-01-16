import {Component, OnInit} from '@angular/core';

import {CandidatService} from "../../shared/service/candidat.service";
import {Candidat} from "../../candidat/interfaces/candidat";

@Component({
  selector: 'app-accueil',
  providers: [CandidatService],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit{

  private candidats: Candidat[];
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

  constructor(private candidatService: CandidatService) {
    this.views = '127';
    this.nbCountries = '60';
    this.candidats = [];
    this.menuList = [];
  }

  getCandidats(): void {
    console.log(JSON.stringify(this.candidats));
    this.candidatService.getCandidats().then(candidats => this.candidats = candidats);
    console.log(JSON.stringify(this.candidats));
  }

  ngOnInit(): void {
    this.getCandidats();
    this.setMenuList();
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

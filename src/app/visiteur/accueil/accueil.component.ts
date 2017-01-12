import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent{

  nbCountries: string;
  views: string;
  public countriesList = [
    {name:"France", value:"33"},
    {name:"Germany", value:"27"},
    {name:"United States", value:"16"},
    {name:"Spain", value:"11"},
    {name:"Britain", value:"10"}
  ];

  public menuList = [
    {name:"Totale candidats", value:"33", croissance:"15", positive:"true"},
    {name:"Totale recruteurs", value:"27", croissance:"10", positive:"true"},
    {name:"Nombres postes à pouvoir", value:"16", croissance:"20", positive:"true"},
    {name:"Nombres de filles", value:"19", croissance:"20", positive:"false"},
    {name:"Connexions totale", value:"10", croissance:"12", positive:"true"}
  ];

  constructor() {
    this.views = '127';
    this.nbCountries = '60';
  }

}

import {Component, OnInit, ViewChildren} from '@angular/core';
import {Candidat} from "../../candidat/class/candidat";
import {Http} from "@angular/http";
import {CandidatService} from "../../shared/service/candidat.service";
import {Poste} from "../../recruteur/Classes/poste";

@Component({
  selector: 'app-list-candidat-poste',
  templateUrl: './list-candidat-poste.component.html',
  styleUrls: ['./list-candidat-poste.component.css']
})
export class ListCandidatPosteComponent implements OnInit {
  @ViewChildren('someVar') filteredItems;
  private _candidat1:Candidat;
  private _candidat2:Candidat;
  private _listCandidat:any[];

  private _listpostes : any[];
  private _poste1:Poste;
  private _poste2:Poste;
  private _poste3:Poste;

  constructor(private candidatService: CandidatService) {
    this._candidat1=new Candidat();
    this._candidat1.nom="AZAMI";
    this._candidat1.prenom="Faical";
    this._candidat1.email="azami@gmail.com";
    this._candidat1.competence="JAVA/JEE";
    this._candidat1.formation="Ingénieur en Developpement web Java";
    this._candidat1.photo="http://www.nale.ch/img/profile.jpg";

    this._candidat2=new Candidat();
    this._candidat2.nom="Douichi";
    this._candidat2.prenom="Abdo";
    this._candidat2.email="abdo@hotmail.fr";
    this._candidat2.competence="Zend/php";
    this._candidat2.formation="Ingénieur en Developpement web Symphony";
    this._candidat2.photo="http://www.nale.ch/img/profile.jpg";

    this._listCandidat=[this._candidat1,this._candidat2,this._candidat1,this._candidat2,this._candidat1,this._candidat2];

    this._poste1=new Poste();
    this._poste1.reference="MaEL1452367";
    this._poste1.intitule="Expert Système (H/F)";
    this._poste1.date_publication=2016;
    this._poste1.type_contrat="CDI";
    this._poste1.resume="De formation en informatique, vous bénéficiez d'une expérience d'au moins 5 ans sur un poste similaire...";

    this._poste2=new Poste();
    this._poste2.reference="MaEL0021545";
    this._poste2.intitule="Ingenieur Java/J2ee";
    this._poste2.date_publication=2017;
    this._poste2.type_contrat="Stage";
    this._poste2.resume="De formation en informatique, vous bénéficiez d'une expérience d'au moins 1 an sur un poste similaire...";


    this._poste3=new Poste();
    this._poste3.reference="MaEL0021545";
    this._poste3.intitule="Technicien Réseau";
    this._poste3.date_publication=2011;
    this._poste3.type_contrat="CDD";
    this._poste3.resume="De formation en informatique, vous avez un diplome bac +2/3 dans le domaine d'informatique...";

    this._listpostes=[this._poste1,this._poste2,this._poste3, this._poste1,this._poste2,this._poste3];
  }


  get listCandidat(): Candidat[] {
    return this._listCandidat;
  }

  set listCandidat(value: Candidat[]) {
    this._listCandidat = value;
  }

  get listpostes(): any[] {
    return this._listpostes;
  }

  set listpostes(value: any[]) {
    this._listpostes = value;
  }

  ngOnInit() {
    this.candidatService.getCandidats().subscribe(candidats => this._listCandidat = candidats);
    //this.posteService.getPosts().subscribe(p => this._listpostes = p);
  }








}

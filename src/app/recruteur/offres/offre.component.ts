import {Component, OnInit} from '@angular/core';
import {OffersService} from '../../shared/offers-service/offers.service';
import {Poste} from '../interfaces/poste';

import {Router} from "@angular/router";
import {candidat} from "../../Candidat/interfaces/candidat";
import {createService} from "../services/createService";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
  providers: [OffersService,createService]
})

export class OffreComponent implements OnInit {

  private _selectedOffre: Poste;
  private _testOffreList: Poste[];
  private temp: Poste[];
  private _profil: boolean;
  private _candidat: boolean;
  private _offres: boolean;
  private cand: candidat;
  private cand2: candidat;
  private cand3: candidat;
  private cand4: candidat;
  private post: Poste;


  constructor(private offreService: OffersService, private createService: createService, private router: Router) {
    this._profil = true;
    this._candidat = false;
    this._offres = false;
    this._testOffreList = [];

    this._selectedOffre = {id:0, id_recruteur: 0,date_publication: 20161206,
      reference:"", intitule:"", indice_salaire:"",salaire_min:10,salaire_max:10,afficher_moyenne:0,
      type_contrat:"",resume:"",point_attention:"",lieu_travail:"",organisation:"",equipe_concernee:"",
      savoir_specifications:[],savoir_faires:[],savoir_etres:[],metiers:[],fonctionnelles:[], techniques:[],
      langues:[], formations:[],certifications:[], listeCandidat:[]};
  }

  setProfil(){
    this._profil = true;
    this._candidat = false;
    this._offres = false;
  }

  setCandidat(){
    this._profil = false;
    this._candidat = true;
    this._offres = false;
  }

  setOffres(){
    this._profil = false;
    this._candidat = false;
    this._offres = true;
  }


  //Return the offer which was selected by the user, recruiter, in this case.
  get selectedOffre(): Poste {
    return this._selectedOffre;
  }

  ngOnInit() {
    this.offreService.fetch().subscribe((offers: any[]) =>  { this._testOffreList = offers;
                                                              this._selectedOffre = offers[0];
    });

  }

  redirect(candidatID:any){

//TODO redirecte vers la page de matching avec l'id
  }


  selectePoste(poste : Poste){
    this._selectedOffre = poste;
  }

  consolelog(value: any){
    console.log(JSON.stringify(value));
  }

  get testOffreList(): Poste[] {
    return this._testOffreList;
  }

  set testOffreList(value: Poste[]) {
    this._testOffreList = value;
  }


  get profil(): boolean {
    return this._profil;
  }

  set profil(value: boolean) {
    this._profil = value;
  }

  get candidat(): boolean {
    return this._candidat;
  }

  set candidat(value: boolean) {
    this._candidat = value;
  }

  get offres(): boolean {
    return this._offres;
  }

  listeCand():candidat[]{
    return this._selectedOffre.listeCandidat;
  }

  set offres(value: boolean) {
    this._offres = value;
  }

  redirectEdition(id:any){
    this.router.navigate(['/editPost/'+id]);

  }

  redirectCandidat(id:any){
    this.router.navigate(['/candidat/profile/:'+id]);
  }

  clotureJob(id:any){
    console.log(id);
    this.createService.delete(id).subscribe();
  }

  deletePoste(poste: any) {
    this.offreService.delete(poste.id).subscribe((offresList: any[]) => this._testOffreList = offresList);
  }

}

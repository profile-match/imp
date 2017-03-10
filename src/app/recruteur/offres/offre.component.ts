import {Component, OnInit} from '@angular/core';
import {OffersService} from '../../shared/offers-service/offers.service';
import {Poste} from '../interfaces/poste';

import {Router} from "@angular/router";
import {candidat} from "../../Candidat/interfaces/candidat";
import {createService} from "../services/createService";
import {forEach} from "@angular/router/src/utils/collection";
import {Avis} from "../interfaces/avis";
import {Recruteur} from "../interfaces/recruteur";
import {RecruteurService} from "../../shared/service/recruteur.service";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
  providers: [OffersService,createService]
})

export class OffreComponent implements OnInit {

  private _selectedOffre: Poste;
  private _testOffreList: Poste[];
  private _dialogStatusAvis:boolean;
  private temp: Poste[];
  private _profil: boolean;
  private _candidat: boolean;
  private _offres: boolean;
  private _selectedCandidat: candidat;
  private avis = <Avis>{};
  private _recruteur = <Recruteur>{};
  private cand: candidat;
  private cand2: candidat;
  private cand3: candidat;
  private cand4: candidat;
  private post: Poste;

  constructor(private recruteurService: RecruteurService,private offreService: OffersService, private createService: createService, private router: Router) {
    this._profil = true;
    this._candidat = false;
    this._offres = false;
    this._testOffreList = [];
    this._dialogStatusAvis =  false;
    this._selectedOffre = {id:0, id_recruteur: 0,date_publication: 20161206,
      reference:"", intitule:"", indice_salaire:"",salaire_min:10,salaire_max:10,afficher_moyenne:0,
      type_contrat:"",resume:"",point_attention:"",lieu_travail:"",organisation:"",equipe_concernee:"",
      savoir_specifications:[],savoir_faires:[],savoir_etres:[],metiers:[],fonctionnelles:[], techniques:[],
      langues:[], formations:[],certifications:[], listeCandidat:[]};
    this.cand = null;
    this.avis.description = "";
    this.avis.note = 0;
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
console.log(this._dialogStatusAvis);
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

  redirectMatch(idDos: any, idCand: any){
    this.router.navigate(['/matchingPost/:iddossier/:idcandidat'.replace(':iddossier',idDos).replace(':idcandidat',idCand)]);
  }

  redirectCandidat(id:any){

  this. _selectedCandidat = id;
  }

  clotureJob(id:any){

    this.createService.delete(id).subscribe();


    for(let p of this._testOffreList)
    {
      if(p.id == this.selectedOffre.id)
      this._testOffreList.splice(this._testOffreList.indexOf(p), 1);
    }
    this._selectedOffre = this._testOffreList[0];


  }

  showAvis(cand:candidat){
    this.cand = cand;
    this._dialogStatusAvis = true;
  }

  get selectedCandidat(): candidat {
    return this._selectedCandidat;
  }

  set selectedCandidat(value: candidat) {
    this._selectedCandidat = value;
  }

  get dialogStatusAvis(): boolean {
    return this._dialogStatusAvis;
  }

  set dialogStatusAvis(value: boolean) {
    this._dialogStatusAvis = value;
  }

  hideDialog(){
    this._dialogStatusAvis = false;
  }

  submit(avis:any){
   console.log(avis);

   this.avis.description = avis.description;
   this.avis.note = avis.note;
   this.recruteurService.getActualRecruteur().subscribe((rec: any) => {

     this.avis.recruteur = rec;
     console.log(this.avis.recruteur);
     this.avis.candidat = this.cand;

     this.createService.createAvis(this.avis).subscribe();

   });
   this.hideDialog();


  }

  get recruteur(): Recruteur {
    return this._recruteur;
  }

  set recruteur(value: Recruteur) {
    this._recruteur = value;
  }

}

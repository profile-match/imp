import {Component, OnInit} from '@angular/core';
import {OffersService} from '../../shared/offers-service/offers.service';
import {Poste} from '../interfaces/poste';
import {Candidat} from '../../candidat/interfaces/candidat';
import {Router} from "@angular/router";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
  providers: [OffersService]
})

export class OffreComponent implements OnInit {

  private _selectedOffre: any = {};
  private _selectedCandidats: Candidat[] = [];
  private _testOffreList: Poste[];
  private _profil: boolean;
  private _candidat: boolean;
  private _offres: boolean;


  constructor(private offreService: OffersService, private router: Router) {
    this._profil = true;
    this._candidat = false;
    this._offres = false;
    this._selectedOffre.reference = "";
    this._selectedOffre.intitule = "";
    this._selectedOffre.indice_salaire = "";
    this._selectedOffre.salaire_min = 0;
    this._selectedOffre.salaire_max = 0;
    this._selectedOffre.afficher_moyenne = 0;
    this._selectedOffre.type_contrat = "";
    this._selectedOffre.resume = "";
    this._selectedOffre.point_attention = "";
    this._selectedOffre.lieu_travail = "";
    this._selectedOffre.organisation = "";
    this._selectedOffre.equipe_concernee = "";
    this._selectedOffre.savoir_specifications = [];
    this._selectedOffre.savoir_faires = [];
    this._selectedOffre.savoir_etres = [];
    this._selectedOffre.metiers = [];
    this._selectedOffre.fonctionnelles = [];
    this._selectedOffre.techniques = [];
    this._selectedOffre.langues = [];
    this._selectedOffre.formations = [];
    this._selectedOffre.certifications = [];
    this._selectedOffre.listeCandidat = [];
    this._testOffreList = [];

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

  set selectedOffre(offre: Poste) {
    this._selectedOffre = offre;
    this._selectedCandidats = offre.listeCandidat;
  }

  //Return the offer which was selected by the user, recruiter, in this case.
  get selectedOffre(): Poste {
    return this._selectedOffre;
  }

  //Return the list of appliers for the selected offer.
  get selectedCandidats(): Candidat[] {
    return this._selectedCandidats;
  }

  ngOnInit() {
    this.offreService.fetch().subscribe((offers: any[]) => this._testOffreList = offers);
    this.offreService.fetch().subscribe((offers: any[]) => this._selectedOffre = offers[0]);
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

  set offres(value: boolean) {
    this._offres = value;
  }
}

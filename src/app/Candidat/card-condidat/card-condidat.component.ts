import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {Poste} from "../../recruteur/interfaces/poste";
import {OffersService} from "../../shared/offers-service/offers.service";
import {duo} from "../interfaces/duo";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/service/authentication.service";


@Component({
  selector: 'app-card-condidat',
  templateUrl: 'card-condidat.component.html'


})
export class CardCondidatComponent implements OnInit {


  private _candidat:candidat;
  private _photo:string;
  private _hasPhoto:boolean;
  private _selectedOffre: Poste;
  private _testOffreList: Poste[];
  private _cancel$: EventEmitter<any>;
  private _submit$: EventEmitter<any>;
  private _duo: duo;




  constructor(private _AuthService:AuthenticationService, private offreService: OffersService, private _candidatService: CandidatService,private router: Router) {
    this.candidat = { };
    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();
    this.duo = {
      candidat : this.candidat,
      poste : this.selectedOffre};

  }

  isRecruteur():boolean{
    return this._AuthService.isRecruteur();
  }


  get candidat(): any {
    return this._candidat;
  }

  get nom(): string{
    return this.candidat.nom || "N/A";
  }

  get prenom(): string{
    return this.candidat.prenom || "N/A";
  }

  get hasPhoto(): boolean{
    return this.candidat.photo;
  }

  get PremiereCompetence():string{
    if(this.candidat.competence.length > 0) {
      return this.candidat.competence[0].competence;
    }

    return "N/A";
  }

  get PremiereFormation():string{
    if(this.candidat.formation.length > 0) {
      return this.candidat.formation[0].intitule_de_formation;
    }
    return "N/A";
  }

  get PremiereExperience():string{
    if(this.candidat.experiencePro.length > 0) {
      return this.candidat.experiencePro[0].intitule_de_poste;
    }

    return "N/A";
  }

  @Input() set candidat(value: any) {
    this._candidat = value;
  }

  ngOnInit() {
    this.photo = this._candidatService.getPhotoUrl(this.candidat.photo);
    this.offreService.fetch().subscribe((offers: any[]) =>  {
      this._testOffreList = offers;
      this._selectedOffre = offers[0];

    });
  }


  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }
  get selectedOffre(): any {
    return this._selectedOffre;
  }

  set selectedOffre(value: any) {
    this._selectedOffre = value;
  }
  get testOffreList(): Poste[] {
    return this._testOffreList;
  }

  set testOffreList(value: Poste[]) {
    this._testOffreList = value;
  }

  submit(){

    this.offreService.postebyId(this.selectedOffre).subscribe((res:Poste) => {

        this._duo.candidat = this.candidat;
        this._duo.poste = res;
        this._submit$.emit(this._duo);

      }
    );

  }


  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  @Output('submit') get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  get duo(): duo {
    return this._duo;
  }

  set duo(value: duo) {
    this._duo = value;
  }

  redirectMatch(){
    this.router.navigate(['/matchingPost/:iddossier/:idcandidat'.replace(':iddossier',this.selectedOffre).replace(':idcandidat',this.candidat.id)]);
  }


}


import {Component, OnInit, Input} from '@angular/core';
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {competence} from "../interfaces/competence";


@Component({
  selector: 'app-card-condidat',
  templateUrl: 'card-condidat.component.html'


})
export class CardCondidatComponent implements OnInit {
  private _candidat:candidat;
  private _photo:string;

  constructor( private _candidatService: CandidatService) {
     this.candidat = {}
    }


  get candidat(): any {
    return this._candidat;
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
  }


  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }


}

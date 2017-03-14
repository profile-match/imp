import {Component, OnInit} from '@angular/core';
import {CandidatService} from "../../shared/service/candidat.service";
import {RecruteurService} from "../../shared/service/recruteur.service";

@Component({
  selector: 'app-list-candidat-poste',
  templateUrl: './list-candidat-poste.component.html',
  styleUrls: ['./list-candidat-poste.component.css']
})
export class ListCandidatPosteComponent implements OnInit {

  private _listCandidat:any[];

  private _listpostes : any[];

  constructor(private candidatService: CandidatService, private recruteur:RecruteurService) {
    this.listCandidat = [];
    this.listpostes = [];
  }


  get listCandidat(): any[] {
    return this._listCandidat;
  }

  set listCandidat(value: any[]) {
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
    this.recruteur.getPosts().subscribe(p => this._listpostes = p);
  }
}

import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {RecruteurService} from "../../shared/service/recruteur.service";
import {Poste} from "../../recruteur/interfaces/poste";

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboardCandidat.component.html',
  styleUrls: ['./dashboardCandidat.component.css']
})
export class DashboardCandidatComponent implements OnInit {
  private _backendURL: any;
  private _candidat: candidat;
  private _id: string;
  private _nbPoste:number;

  constructor(private _candidatService: CandidatService, private _recruteurService : RecruteurService) {
    this._backendURL = {};
    this.id = "";
    this.candidat = {};
    this.nbPoste = 0;
  }

  ngOnInit() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    else {
      this._candidatService.getCandidat(localStorage.getItem("user")).subscribe((candidat: candidat) => this._candidat = candidat);
    }

    this._recruteurService.getPosts().subscribe((posts : Poste[]) => this.nbPoste = posts.length);

  }

  get candidat(): any {
    return this._candidat;
  }

  set candidat(value: any) {
    this._candidat = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get nbPoste(): number {
    return this._nbPoste;
  }

  set nbPoste(value: number) {
    this._nbPoste = value;
  }
}

import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {ActivatedRoute, Router} from "@angular/router";
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboardCandidat.component.html',
  styleUrls: ['./dashboardCandidat.component.css']
})
export class DashboardCandidatComponent implements OnInit {

  private _backendURL: any;
  private _candidat: candidat;
  private _id: string;

  constructor(private _route : ActivatedRoute,
              private _candidatService: CandidatService) {
    this._backendURL = {};
    this.id = "";
    this.candidat = {};

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

  //TODO à modifier en utilisant le service
  ngOnInit() {
    this._route.params
      .map((params: any) => params.id)
      .subscribe((id: string) => this.id = id);
    this._candidatService.getCandidat(this.id).subscribe((candidat: any) =>{ this._candidat = candidat});
    console.log(this._candidat.nom);
    //  this._http.get(this._backendURL.getCandidat.replace(":id", 1))
    //   .map(res => res.json())
    //  .subscribe((candidat: any[]) => {
    //   console.log(candidat);
    //  this._cdd = candidat;
    //});
  }
}

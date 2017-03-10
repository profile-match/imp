import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboardCandidat.component.html',
  styleUrls: ['./dashboardCandidat.component.css']
})
export class DashboardCandidatComponent implements OnInit {

  private _backendURL: any;
  private _candidat: candidat;
  private _id: string;

  constructor(private _candidatService: CandidatService) {
    this._backendURL = {};
    this.id = "";
    this.candidat = {};
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);

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

  ngOnInit() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    else {
      this._candidatService.getCandidat(localStorage.getItem("user")).subscribe((candidat: candidat) => this._candidat = candidat);
    }
  }
}

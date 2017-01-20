import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Http} from "@angular/http";

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboardCandidat.component.html',
  styleUrls: ['./dashboardCandidat.component.css']
})
export class DashboardCandidatComponent implements OnInit {
  get cdd(): any {
    return this._cdd;
  }

  set cdd(value: any) {
    this._cdd = value;
  }

  private _cdd: any;
  private _backendURL: any;

  constructor(private _http: Http) {
    this._cdd = {};
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  ngOnInit() {
    this._http.get(this._backendURL.getCandidat.replace(":id", 1))
      .map(res => res.json())
      .subscribe((candidat: any[]) => {
          console.log(candidat);
          this._cdd = candidat;
        });
  }
}

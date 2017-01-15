import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";

@Component({
  selector: 'app-informer-moderateur',
  templateUrl: './informer-moderateur.component.html',
  styleUrls: ['./informer-moderateur.component.css']
})
export class InformerModerateurComponent implements OnInit {

  private _data: any;

  private _backendURL: any;

  public titre = "";
  public description = "";

  constructor(private _http: Http) {
    this._data = {};
    this._backendURL = {};

    // TY Jessel
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
      // build all backend urls
      Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
    }
  }

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  onSubmit(): void {
    this._data["titre"] = this.titre;
    this._data["description"] = this.description;

    console.log(JSON.stringify(this._data));
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-inscription-linkedin',
  templateUrl: './inscription-linkedin.component.html',
  styleUrls: ['./inscription-linkedin.component.css']
})
export class InscriptionLinkedinComponent implements OnInit {

  private _backendURL: any;


  constructor(private activatedRoute: ActivatedRoute, private _http: Http) {
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
    this._http.get(this._backendURL.linkedinToken.replace(':code',this.getCode(location.href)).replace(':state', this.getState(location.href)))
      .subscribe();
  }

  getCode(chaine:string):string{
    var record = false;
    var rep = "";
    for (var char of chaine) {
      // is it me you're looking for?
      if(record){
        if(char === '&')
          return rep;
        rep += char;
      }
      if(char === '=')
        record = true;
    }
    return rep;
  }

  getState(chaine:string):string{
    var record = false;
    var first = true;
    var rep = "";
    for (var char of chaine) {
      // is it me you're looking for?
      if(first){
        if(char === '&')
          first = false;
      }else{
        if(record){
          rep += char;
        }
        if(char === '=')
          record = true;
      }

    }
    return rep;
  }

}

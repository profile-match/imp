import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-profile-linkedin',
  templateUrl: './profile-linkedin.component.html',
  styleUrls: ['./profile-linkedin.component.css']
})
export class ProfileLinkedinComponent implements OnInit {

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
    this._http.get(this._backendURL.linkedinCddToken.replace(':code',this.getCode(location.href)).replace(':state', this.getState(location.href)).replace(':id', this.getId(location.href)))
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

  getId(chaine:string):string{
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

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
    //console.log(this.activatedRoute.url);
    //console.log(this.getCode(location.href));
    //console.log(this.getState(location.href));


    const requestOptions = { headers: new Headers({'Content-Type': 'text/plain', 'Access-Control-Allow-Origin' : 'http://localhost:4200'})};
    var params:any = {};
    params.grant_type="authorization_code";
    params.code=this.getCode(location.href);
    params.redirect_uri="http%3A%2F%2Flocalhost%3A4200%2Fhome%2Finscription-linkedin";
    params.client_id="86g3ojziahkhnk";
    params.client_secret="k4DM17hgWPswnxKA";

    var url = "https://www.linkedin.com/oauth/v2/accessToken?" +
      "grant_type=authorization_code&" +
      "code=" + this.getCode(location.href) + "&" +
      "redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome%2Finscription-linkedin&" +
      "client_id=86g3ojziahkhnk&" +
      "client_secret=k4DM17hgWPswnxKA";
console.log(url);

/*
    this._http.post(url, params, requestOptions)
      .map( res => {
          if (res.status === 200) {
            console.log(res.json());
            return res.json();
          }
          else {
            return [];
          }
        })
        .subscribe( (people: any[]) => {
        });
        */

    console.log(this._backendURL.linkedinToken.replace(':code',this.getCode(location.href)).replace(':state', this.getState(location.href)));
    /*
    this._http.get(this._backendURL.replace(':code',this.getCode(location.href)).replace(':state', this.getState(location.href)))
      .map( res =>  res.json() )
      .subscribe( (res: any) => {
        console.log(res);
    });
    */
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

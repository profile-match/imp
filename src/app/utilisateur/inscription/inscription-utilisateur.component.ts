import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Location }  from '@angular/common';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Utilisateur} from "../utilisateur";

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: 'inscription-utilisateur.component.html',
  styleUrls: ['inscription-utilisateur.component.css']
})

export class InscriptionUtilisateurComponent implements OnInit {
  public email:string;
  public motdepasse:string;
  _utilisateur: Utilisateur;
  users: Utilisateur[];

  public DEFAULT_STATUS = 0;
  public HOVER_STATUS = 1;
  public ACTIVATED_STATUS = 2;
  private _buttonLinkedinStatus:number;


  public buttonLinkedinStatus():number{
  return this._buttonLinkedinStatus;
}

  private headers = new Headers({'Content-Type': 'application/json'});

  // private property to store all backend URLs
  private _backendURL: any;
  private candidatsUrl = 'api/candidats';  // URL to web api

  constructor(private http: Http, private _router: Router, private location: Location, private _el: ElementRef, private _rd: Renderer) {
    this._backendURL = {};
    this._buttonLinkedinStatus = this.DEFAULT_STATUS;
    this.users = [{  id:1, email:'string', motdepasse:'string' }];
    this._utilisateur = {  id:1, email:'string', motdepasse:'string' };

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  ngOnInit() {
     this.http.get(this._backendURL.allUser)
      .map( res =>  res.json() )
       .subscribe(us => this.users = us);
  }

  onSubmit(): void {
    this.inscrireUtilisateur();
  }

  inscrireUtilisateur() {
    this._utilisateur.email = this.email;
    this._utilisateur.motdepasse = this.motdepasse;

    const requestOptions = { headers: new Headers({'Content-Type': 'application/json'})};
    this.http.post("http://"+environment.backend.host+":"+environment.backend.port+"/rest/utilisateur/inscrire", this._utilisateur , requestOptions)
      .subscribe();
    this._router.navigate(['/accueil']);
    }

  goBack(): void {
    this.location.back();
  }

  goLinkedIn(): void{
      this.activeLinkedinButton();
      let url = environment.frontend.protocol+"%3A%2F%2F"+environment.frontend.host
      if(environment.frontend.port != ''){
        url += "%3A"+environment.backend.port;
      }
      window.location.href="https://www.linkedin.com/oauth/v2/authorization?" +
        "response_type=code&" +
        "client_id=7868doeuipinun&" +
        "redirect_uri="+url+"%2Fhome%2Finscription-linkedin&" +
        "state=987654321&" +
        "scope=r_emailaddress";
  }

  overLinkedinButton(): void{
    this._buttonLinkedinStatus=this.HOVER_STATUS;
  }

  activeLinkedinButton(): void{
    this._buttonLinkedinStatus=this.ACTIVATED_STATUS;
  }

  leaveLinkedinButton(): void{
    this._buttonLinkedinStatus=this.DEFAULT_STATUS;
  }
}




import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Candidat} from "../../candidat/interfaces/candidat";
import {Recruteur} from "../../recruteur/interfaces/recruteur";

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('admin@admin','admin'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {
  // private property to store candidats value
  private _candidats: Candidat[];
  // private property to store recruteurs value
  private _recruteurs: Recruteur[];
  // private property to store all backend URLs
  private _backendURL: any;

  constructor(private _http: Http, private _router: Router){
    this._candidats = [];
    this._recruteurs = [];

    this._backendURL = {};
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);

    this._http.get(this._backendURL.allCandidat)
      .map( res => res.json() )
      .subscribe( (candidats: any[]) => this._candidats = candidats);
/*
    this._http.get(this._backendURL.allRecruteur)
      .map( res => res.json() )
      .subscribe( (rec: any[]) => this._recruteurs = rec);*/
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("ut");
    this._router.navigate(['/accueil']);
  }

  login(user:User){

    var authenticatedCandidat = this._candidats.find(c => c.email === user.email);
  //  var authenticatedRecruteur = this._recruteurs['data'].find(r => r.email === user.email);
    var authenticatedModerator = users.find(u => u.email === user.email);

    if (authenticatedModerator && authenticatedModerator.password === user.password){
      localStorage.setItem("user", user.email);
      this._router.navigate(['/moderateur']);

      return true;
    }
    else if (authenticatedCandidat && authenticatedCandidat.nom === user.password){
      localStorage.setItem("user", authenticatedCandidat.toString());
      localStorage.setItem("ut", "candidat");

      this._router.navigate(['/addPost']);

      return true;
    }
  /*  else if (authenticatedRecruteur && authenticatedRecruteur.password === user.password){
      localStorage.setItem("user", authenticatedRecruteur.toString());
      localStorage.setItem("ut", "recruteur");
      this._router.navigate(['/accueil']);

      return true;
    }*/
    return false;

  }

  isLogin(){
    if (localStorage.getItem("user") === null){
      return false;
    }
    else {
      return true;
    }
  }

  isAdmin(){
    if (localStorage.getItem("user") === "admin@admin"){
      return true;
    }
    else {
      return false;
    }
  }

  isCandidat(){
    if (localStorage.getItem("ut") === "candidat"){
      return true;
    }
    else {
      return false;
    }
  }

  isRecruteur(){
    if (localStorage.getItem("ut") === "recruteur"){
      return true;
    }
    else {
      return false;
    }
  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
  }

  checkCredentialModerator(){
    if (localStorage.getItem("user") !== "admin@admin"){
      this._router.navigate(['/login']);
    }
  }
}

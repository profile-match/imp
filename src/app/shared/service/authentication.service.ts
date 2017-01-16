import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import any = jasmine.any;
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Candidat} from "../../candidat/interfaces/candidat";

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('admin','admin'),
  new User('user1@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {
  // private property to store candidats value
  private _candidats: Candidat[];
  // private property to store recruteurs value
  private _recruteurs: any[];
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
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/accueil']);
  }

  login(user:User){

    console.log(JSON.stringify(users));
    console.log(JSON.stringify(this._candidats['data']));
    var authenticatedCandidat = this._candidats['data'].find(c => c.email === user.email);
  //  var authenticatedRecruteur = this._recruteurs['data'].find(r => r.email === user.email);
    var authenticatedModerator = users.find(u => u.email === user.email);
    if (authenticatedModerator && authenticatedModerator.password === user.password){
      localStorage.setItem("user", user.email);
      this._router.navigate(['/moderateur']);

      return true;
    }
    else if (authenticatedCandidat && authenticatedCandidat.password === user.password){
      localStorage.setItem("user", authenticatedCandidat.toString());
      this._router.navigate(['/poste-form']);

      return true;
    }
 /*   else if (authenticatedRecruteur && authenticatedRecruteur.password === user.password){
      localStorage.setItem("user", authenticatedRecruteur.toString());
      this._router.navigate(['/recruteur']);

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

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
  }

  checkCredentialModerator(){
    if (localStorage.getItem("user") !== "admin"){
      this._router.navigate(['/login']);
    }
  }
}

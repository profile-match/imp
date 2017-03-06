import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Recruteur} from "../../recruteur/interfaces/recruteur";
import {candidat} from "../../Candidat/interfaces/candidat";
import {Utilisateur} from "../../utilisateur/utilisateur";

export class User {
  constructor(public email: string,
              public password: string) {
  }
}

var users = [
  new User('admin@admin', 'admin'),
  new User('user1@gmail.com', 'a23')
];

@Injectable()
export class AuthenticationService {

  private _users:Utilisateur[];

  // private property to store candidats value
  private _candidats: candidat[];
  // private property to store recruteurs value
  private _recruteurs: Recruteur[];
  // private property to store all backend URLs
  private _backendURL: any;

  constructor(private _http: Http, private _router: Router) {
    this._candidats = [];
    this._recruteurs = [];
    this._users = [];

    this._backendURL = {};
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);

    this._http.get(this._backendURL.allCandidat)
      .map(res => res.json())
      .subscribe((candidats: any[]) => this._candidats = candidats);

    this._http.get(this._backendURL.allRecruteur)
      .map(res => res.json())
      .subscribe((rec: any[]) => this._recruteurs = rec);

    this._http.get(this._backendURL.allUser)
      .map(res => res.json())
      .subscribe((us: any[]) => this._users = us);
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("ut");
    this._router.navigate(['/accueil']);
  }

  existUser(user: Utilisateur){
    this._http.get(this._backendURL.allUser)
      .map(res => res.json())
      .subscribe((us: any[]) => this._users = us);

    var authenticatedUser = this._users.find(r => r.email === user.email);
    if (authenticatedUser) {
      return true;
    }
    return false;
  }


  login(user: Utilisateur) {

    this._http.get(this._backendURL.allCandidat)
      .map(res => res.json())
      .subscribe((candidats: any[]) => this._candidats = candidats);

    this._http.get(this._backendURL.allRecruteur)
      .map(res => res.json())
      .subscribe((rec: any[]) => this._recruteurs = rec);

    this._http.get(this._backendURL.allUser)
      .map(res => res.json())
      .subscribe((us: any[]) => this._users = us);

    var authenticatedCandidat = this._candidats.find(c => c.email === user.email);
    var authenticatedRecruteur = this._recruteurs.find(r => r.email === user.email);

    var authenticatedUser = this._users.find(r => r.email === user.email);
    var authenticatedModerator = users.find(u => u.email === user.email);

    if (authenticatedModerator && authenticatedModerator.password === user.motdepasse) {
      localStorage.setItem("user", user.email);
      this._router.navigate(['/moderateur']);

      return true;
    }
    else if (authenticatedUser && authenticatedUser.motdepasse === user.motdepasse) {
      if(authenticatedCandidat) {
        localStorage.setItem("user", authenticatedCandidat.id.toString());
        localStorage.setItem("ut", "candidat");
        console.log("id cand : " + localStorage.getItem("user"));
        this._router.navigate(['/addPost']);

        return true;
      }
      else if(authenticatedRecruteur) {
        localStorage.setItem("user", authenticatedRecruteur.id.toString());
        localStorage.setItem("ut", "recruteur");
        this._router.navigate(['/accueil']);

        return true;
      }
    }
    return false;

  }

  isLogin() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    else {
      return true;
    }
  }

  isAdmin() {
    if (localStorage.getItem("user") === "admin@admin") {
      return true;
    }
    else {
      return false;
    }
  }

  isCandidat() {
    if (localStorage.getItem("ut") === "candidat") {
      return true;
    }
    else {
      return false;
    }
  }

  isRecruteur() {
    if (localStorage.getItem("ut") === "recruteur") {
      return true;
    }
    else {
      return false;
    }
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['/login']);
    }
  }

  checkCredentialModerator() {
    if (localStorage.getItem("user") !== "admin@admin") {
      this._router.navigate(['/login']);
    }
  }
}

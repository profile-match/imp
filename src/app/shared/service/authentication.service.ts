import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Recruteur} from "../../recruteur/interfaces/recruteur";
import {candidat} from "../../Candidat/interfaces/candidat";
import {Utilisateur} from "../../utilisateur/utilisateur";
import { Md5 } from 'ts-md5/dist/md5';
import {NotificationService} from "../../shared/service/notification.service";

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

  constructor(private _notificationService : NotificationService, private _http: Http, private _router: Router, private _md5: Md5) {
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

    this.update();
  }

  update() {
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
      .subscribe((us: any[]) => {
        this._users = us;
      });
    let authenticatedUser = this._users.find(r => r.email === user.email);
    return authenticatedUser;

  }

  testlog(user: Utilisateur):boolean{
    this._http.get(this._backendURL.allUser)
      .map(res => res.json())
      .subscribe((us: any[]) => {
        this._users = us;
      });
    let authenticatedUser = this._users.find(r => r.email === user.email);

    let authenticatedModerator = users.find(u => u.email === user.email);

    if (authenticatedModerator && authenticatedModerator.password === user.motdepasse) {
      return true;
    }

    let userHash = Md5.hashStr(user.motdepasse);

    return authenticatedUser && authenticatedUser.motdepasse === userHash.toString();
  }

  currentUser(idC:number) {
    this._http.get(this._backendURL.allUser)
      .map(res => res.json())
      .subscribe((us: any[]) => {
        this._users = us;
      });
    return this._users.find(r => r.id === idC);
  }

  login(user: Utilisateur) {

    this.update();

    let authenticatedUser : Utilisateur;
    const requestOptions = {headers: new Headers({'Content-Type': 'application/json'})};
    this._http
      .get(this._backendURL.login.replace(':email', user.email).replace(':hashe', Md5.hashStr(user.motdepasse)))
      .map(res => {
        return res.json();
      }).subscribe((u : Utilisateur) => {
      authenticatedUser = u;

      let authenticatedModerator = users.find(u => u.email === user.email);

      if (authenticatedModerator && authenticatedModerator.password === user.motdepasse) {
        localStorage.setItem("user", user.email);
        this._router.navigate(['/moderateur']);

        return true;
      }
      else if (authenticatedUser) {
        if(authenticatedUser.type == "C") {
          return this._http.get(this._backendURL.getCandidat.replace(':id', authenticatedUser.id))
            .map(res => {
              if (res.status === 200) {
                return res.json();
              }
            }).subscribe(c => {
              if(c.banned==0){
                localStorage.setItem("user", authenticatedUser.id.toString());
                localStorage.setItem("ut", "candidat");
              //  console.log("id cand : " + localStorage.getItem("user"));
                this._router.navigate(['/candidat/']);

                return true;
              }
              else
                this._notificationService.addNotification("vous êtes banni par le moderateur!!", "error");

            });
        }
        else if(authenticatedUser.type == "R") {
          return this._http.get(this._backendURL.oneRecruteur.replace(':id', authenticatedUser.id))
            .map( res =>  { if (res.status === 200) { return res.json(); } })
            .subscribe(r => {
              if(r.banned==0) {
                localStorage.setItem("user", authenticatedUser.id.toString());
                localStorage.setItem("ut", "recruteur");
                //  console.log("id rec : " + localStorage.getItem("user"));
                this._router.navigate(['/accueil']);

                return true;
              }
              else
                this._notificationService.addNotification("vous êtes banni par le moderateur!!", "error");
            });
        }
      }
      return false;
    });
  }

  isLogin() {
    return localStorage.getItem("user") !== null;
  }

  isAdmin() {
    return localStorage.getItem("user") === "admin@admin";
  }

  isCandidat() {
    return localStorage.getItem("ut") === "candidat";
  }

  isRecruteur() {
    return localStorage.getItem("ut") === "recruteur";
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

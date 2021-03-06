import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-connexion-linkedin',
  templateUrl: './connexion-linkedin.component.html',
  styleUrls: ['./connexion-linkedin.component.css']
})
export class ConnexionLinkedinComponent implements OnInit {
  private _backendURL: any;
  private _code: string;
  private _state: string;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private _http: Http) {
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
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this._code = params['code'];
      this._state = params['state'];
    });

    this._http.get(this._backendURL.linkedinConnexion.replace(':code', this._code).replace(':state', this._state))
      .map(res => {
        if (res.status === 200) {
          var user = res.json();
          var id = user.id;
          var genre = user.genre;
          if (id != '-1') {
            localStorage.setItem("user", id);
            localStorage.setItem("ut", genre);
            if (genre == "candidat") {
              this._router.navigate(['/editCandidat']);
            } else {
              this._router.navigate(['/dashboardRecruteur']);
            }
          } else {
            this._router.navigate(['/login']);
          }
        }
      })
      .subscribe();
  }
}

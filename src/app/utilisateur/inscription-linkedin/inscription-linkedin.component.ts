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
  private _code: string;
  private _genre: string;
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
      this._genre = params['genre'];
      this._state = params['state'];
    });

    this._http.get(this._backendURL.linkedinToken.replace(':code',this._code).replace(':state', this._state).replace(':genre', this._genre))
      .map(res => {

        console.log("text: "+ res.text());
        if (res.status === 200) {
          var id = res.text();
          localStorage.setItem("user", id);
          if(this._genre=="C"){
            localStorage.setItem("ut", "candidat");
            this._router.navigate(['/editCandidat']);
          }else{
            localStorage.setItem("ut", "recruteur");
            this._router.navigate(['/dashboardRecruteur']);
          }
        }
      }).subscribe();
  }
}

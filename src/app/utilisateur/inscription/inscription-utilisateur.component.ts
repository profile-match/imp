import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Location }  from '@angular/common';
import {environment} from "../../../environments/environment";
import {Router, ActivatedRoute} from "@angular/router";
import {Utilisateur} from "../utilisateur";
import {CandidatService} from "../../shared/service/candidat.service";
import {candidat} from "../../Candidat/interfaces/candidat";
import {AuthenticationService} from '../../shared/service/authentication.service'

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

  private _id: number;
  private _candidat: candidat;

  public genders = [];
  public errorMsg = '';

  private _selectedG: string;

  constructor(private _service:AuthenticationService, private _candidatService: CandidatService, private _route: ActivatedRoute, private http: Http, private _router: Router, private location: Location, private _el: ElementRef, private _rd: Renderer) {
    this._backendURL = {};
    this._buttonLinkedinStatus = this.DEFAULT_STATUS;
    this.users = [{  id:1, email:'string', motdepasse:'string', type:'', safe:1000 }];
    this._utilisateur = {  id:1, email:'string', motdepasse:'string', type:'', safe:1000 };
    this._id =0;
    this._selectedG = 'R';

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  ngOnInit() {

    this._route.params
      .map((params: any) => this._id=params.id)
      .subscribe();

    if(this._id == 1){  //recruteur
      this._selectedG='R';
      this.genders = [
        { value: 'C', display: 'candidat' },
        { value: 'R', display: 'recruteur' }

      ];
    }
    else if(this._id == 2){ //candidat
      this._selectedG='C';
      this.genders = [
        { value: 'R', display: 'recruteur' },
        { value: 'C', display: 'candidat' }
      ];
    }
    else{
      this._id = 0;
      this.genders = [
        { value: 'C', display: 'candidat' },
        { value: 'R', display: 'recruteur' }
      ];
      this._selectedG='R'
    }

  }

  onSubmit(): void {
    this.inscrireUtilisateur();
  }

  inscrireUtilisateur() {
      this._utilisateur.email = this.email;
      this._utilisateur.motdepasse = this.motdepasse;
      if(this._service.existUser(this._utilisateur)){
        this.errorMsg = 'Utilisateur existant';
      }
      else {
        const requestOptions = {headers: new Headers({'Content-Type': 'application/json'})};
        if (this._selectedG == 'C'){
          this._utilisateur.type = "C";
          this.http.post("http://" + environment.backend.host + ":" + environment.backend.port + "/rest/utilisateur/inscrireCand", this._utilisateur, requestOptions).subscribe();
        }
        else{
          this._utilisateur.type = "R";
          this.http.post("http://" + environment.backend.host + ":" + environment.backend.port + "/rest/utilisateur/inscrireRec", this._utilisateur, requestOptions).subscribe();
        }
        this._service.update();
        this._router.navigate(['/login']);
        this._service.login(this._utilisateur);
      }
    }

  goBack(): void {
    this.location.back();
  }

  goLinkedIn(): void{
      this.activeLinkedinButton();
      let url = environment.frontend.protocol+"%3A%2F%2F"+environment.frontend.host;
      if(environment.frontend.port != ""){
        url += "%3A"+environment.frontend.port;
      }
      let param = "?genre=";
      if(this._selectedG == 'C'){
        param += "C";
      }else{
        param += "R";
      }

      window.location.href="https://www.linkedin.com/oauth/v2/authorization?" +
        "response_type=code&" +
        "client_id=7868doeuipinun&" +
        "redirect_uri="+url+"%2Finscription-linkedin"+param+"&" +
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




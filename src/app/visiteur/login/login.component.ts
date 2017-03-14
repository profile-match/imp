import { Component, OnInit } from '@angular/core';
import { Location }  from '@angular/common';
import {AuthenticationService, User} from '../../shared/service/authentication.service'
import {Subject} from "rxjs";
import {Utilisateur} from "../../utilisateur/utilisateur";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:Utilisateur;// = new User('','');

  public errorMsg = '';

  public DEFAULT_STATUS = 0;
  public HOVER_STATUS = 1;
  public ACTIVATED_STATUS = 2;
  private _buttonLinkedinStatus:number;


  public buttonLinkedinStatus():number{
    return this._buttonLinkedinStatus;
  }

  constructor(private location: Location, private _service:AuthenticationService ) {

    this.user= {id:null, email:'', motdepasse:'', type:'', safe:1000};
    this._buttonLinkedinStatus = this.DEFAULT_STATUS;

  }

  login(a :any) {

   // this.wait(1500);
  //  alert("retour log : "+this._service.testlog(this.user));
    this._service.login(this.user)
    if(!this._service.testlog(this.user))
      this.errorMsg = 'Failed to login';
  }

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

  ngOnInit() {
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

    window.location.href="https://www.linkedin.com/oauth/v2/authorization?" +
      "response_type=code&" +
      "client_id=7868doeuipinun&" +
      "redirect_uri="+url+"%2Fconnexion-linkedin&" +
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

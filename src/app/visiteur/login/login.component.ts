import { Component, OnInit } from '@angular/core';
import { Location }  from '@angular/common';
import {AuthenticationService, User} from '../../shared/service/authentication.service'
import {Subject} from "rxjs";
import {Utilisateur} from "../../utilisateur/utilisateur";


@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:Utilisateur;// = new User('','');

  public errorMsg = '';

  constructor(private location: Location, private _service:AuthenticationService ) {
    this.user= {id:null, email:'', motdepasse:'', type:'', safe:1000};
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

}

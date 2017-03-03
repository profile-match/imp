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
    this.user= {id:null, email:'', motdepasse:''};
  }

  login(a :any) {
    if(!this._service.login(this.user)){
      this.errorMsg = 'Failed to login';
    }
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}

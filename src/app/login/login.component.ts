import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[Utilisateur]
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(private user:Utilisateur,private http:Http) { }

  ngOnInit() {
  }

  createAccount(){

    this.user.setEmail(this.email);
    this.user.setPassword(this.password);
    var json=JSON.stringify(this.user);

    var header= new Headers({
      'Content-Type': 'application/json'
    });


    this.http.post("http://localhost:8080/utilisateur/inscrire",json,{
      headers:header
    }).subscribe(
      data =>  { alert("successs ");},
      err => {alert("erreur (Lancez votre backend)");},
      () => console.log('done')
    );
    alert("email:"+this.email+"//password:"+this.password);
  }
}

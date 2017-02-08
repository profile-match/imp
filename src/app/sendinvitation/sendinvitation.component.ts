import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { CustomValidators } from "./custom-validators";
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-sendinvitation',
  templateUrl: './sendinvitation.component.html',
  styleUrls: ['./sendinvitation.component.css']
})
export class SendinvitationComponent implements OnInit {


  private _email: string;
  private _form: FormGroup;
  private _backendURL: any;

  constructor(private _http: Http) {
    this._email = 'nom.prenom@exemple.com';
    this._form = this._buildForm();
/*
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
      // build all backend urls
      Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
    }*/
  }

  get form(): FormGroup {
    return this._form;
  }
  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }

  ngOnInit() {
  }

  onSubmit(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    this._http.post('http://localhost:8080/javaMail/webresources/candidat/sendinvitationmail/', JSON.stringify(this._email), {
      headers: headers
    }).subscribe();
    alert('Invitation Envoyée');
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required, CustomValidators.validerEmail
      ]))
    });
  }



}

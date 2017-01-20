import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Utilisateur } from "../utilisateur";

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: 'inscription-utilisateur.component.html',
  styleUrls: ['inscription-utilisateur.component.css']
})

export class InscriptionUtilisateurComponent implements OnInit {
  public email:string;
  public motdepasse:string;

  constructor(private utilisateur:Utilisateur,private http:Http) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.inscrireUtilisateur();
  }

  inscrireUtilisateur() {
      this.utilisateur.setEmail(this.email);
      this.utilisateur.setMotDePasse(this.motdepasse);

      var json=JSON.stringify(this.utilisateur);

      var header= new Headers({
        'Content-Type': 'application/json'
      });

      this.http.post("http://localhost:8080/utilisateur/inscrire",json,{headers:header}).subscribe(
        data =>  { alert("Inscription réussie !");},
        err => {alert("Erreur lors de l'inscription. Merci de réessayer");},
        () => console.log('done')
      );
    }
}




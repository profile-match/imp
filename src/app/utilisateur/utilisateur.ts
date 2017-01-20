import {Injectable} from '@angular/core';

@Injectable()
export  class Utilisateur{
  private id:string;
  private email:string;
  private motdepasse:string;

  getId(): string {
    return this.id;
  }

  getMotDePasse(): string {
    return this.motdepasse;
  }

  getEmail(): string {
    return this.email;
  }

  setId(value: string) {
    this.id = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setMotDePasse(value: string) {
    this.motdepasse = value;
  }


}


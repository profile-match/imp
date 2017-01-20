import {Injectable} from '@angular/core';
@Injectable()
export  class Utilisateur{
  private id:string;
  private nom:string;
  private prénom:string;
  private email:string;
  private photo_profile:Blob;
  private admine:boolean;
  private banni:boolean;
  private siteWeb:string;
  private password:string;

  getId(): string {
    return this.id;
  }

  getNom(): string {
    return this.nom;
  }

  getPrenom(): string {
    return this.prénom;
  }

  getEmail(): string {
    return this.email;
  }

  getPhoto_profile(): Blob {
    return this.photo_profile;
  }

  getAdmine(): boolean {
    return this.admine;
  }

  getBanni(): boolean {
    return this.banni;
  }

  getSiteWeb(): string {
    return this.siteWeb;
  }

  getPassword(): string {
    return this.password;
  }



  setId(value: string) {
    this.id = value;
  }

  setNom(value: string) {
    this.nom = value;
  }

  setPrenom(value: string) {
    this.prénom = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setPhoto_profile(value: Blob) {
    this.photo_profile = value;
  }

  setAdmine(value: boolean) {
    this.admine = value;
  }

  setBanni(value: boolean) {
    this.banni = value;
  }

  setSiteWeb(value: string) {
    this.siteWeb = value;
  }

  setPassword(value: string) {
    this.password = value;
  }


}


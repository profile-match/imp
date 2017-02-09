import {Injectable} from "@angular/core";
@Injectable()
export class Candidat {
  private _id: number;
  private _email: string;
  private _banned: number;
  private _loisirs: string;
  private _nom: string;
  private _photo: string;
  private _prenom: string;
  private _experiencePro: string;
  private _formation: string;
  private _competence:any;

  constructor() {

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get banned(): number {
    return this._banned;
  }

  set banned(value: number) {
    this._banned = value;
  }

  get loisirs(): string {
    return this._loisirs;
  }

  set loisirs(value: string) {
    this._loisirs = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get experiencePro(): string {
    return this._experiencePro;
  }

  set experiencePro(value: string) {
    this._experiencePro = value;
  }

  get formation(): string {
    return this._formation;
  }

  set formation(value: string) {
    this._formation = value;
  }

  get competence(): any {
    return this._competence;
  }

  set competence(value: any) {
    this._competence = value;
  }
}

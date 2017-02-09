import {Injectable} from "@angular/core";
@Injectable()

export class Poste {
  private _id: number;
  private _id_recruteur: number;
  private _date_publication: number;
  private _reference: string;
  private _intitule: string;
  private _indice_salaire: string;
  private _salaire_min: number;
  private _salaire_max: number;
  private _type_contrat: string;
  private _resume: string;
  private _point_attention: string;
  private _lieu_travail: string;
  private _afficher_moyenne: number;
  private _organisation: string;
  private _equipe_concernee: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get id_recruteur(): number {
    return this._id_recruteur;
  }

  set id_recruteur(value: number) {
    this._id_recruteur = value;
  }

  get date_publication(): number {
    return this._date_publication;
  }

  set date_publication(value: number) {
    this._date_publication = value;
  }

  get reference(): string {
    return this._reference;
  }

  set reference(value: string) {
    this._reference = value;
  }

  get intitule(): string {
    return this._intitule;
  }

  set intitule(value: string) {
    this._intitule = value;
  }

  get indice_salaire(): string {
    return this._indice_salaire;
  }

  set indice_salaire(value: string) {
    this._indice_salaire = value;
  }

  get salaire_min(): number {
    return this._salaire_min;
  }

  set salaire_min(value: number) {
    this._salaire_min = value;
  }

  get salaire_max(): number {
    return this._salaire_max;
  }

  set salaire_max(value: number) {
    this._salaire_max = value;
  }

  get type_contrat(): string {
    return this._type_contrat;
  }

  set type_contrat(value: string) {
    this._type_contrat = value;
  }

  get point_attention(): string {
    return this._point_attention;
  }

  set point_attention(value: string) {
    this._point_attention = value;
  }

  get lieu_travail(): string {
    return this._lieu_travail;
  }

  set lieu_travail(value: string) {
    this._lieu_travail = value;
  }

  get afficher_moyenne(): number {
    return this._afficher_moyenne;
  }

  set afficher_moyenne(value: number) {
    this._afficher_moyenne = value;
  }

  get organisation(): string {
    return this._organisation;
  }

  set organisation(value: string) {
    this._organisation = value;
  }

  get equipe_concernee(): string {
    return this._equipe_concernee;
  }

  set equipe_concernee(value: string) {
    this._equipe_concernee = value;
  }

  get resume(): string {
    return this._resume;
  }

  set resume(value: string) {
    this._resume = value;
  }

  constructor() {
  }

}


import {Component, OnInit, Input} from '@angular/core';
import {candidat} from "../interfaces/candidat";
import {Poste} from "../../recruteur/interfaces/poste";

@Component({
  selector: 'app-postes-candidat',
  templateUrl: './postesCandidat.component.html',
  styleUrls: ['./postesCandidat.component.css']
})
export class PostesCandidatComponent implements OnInit {

  private _postes : Poste[];
  private _displayPostes : Poste[];
  private _page : number;
  private _increment : number;
  private _candidat : candidat;
  private _search : string;

  constructor() {
    this._search = "";
    this._postes = [];
    this._displayPostes = [];
    this._page = 1; // Le numero de page commence a 1
    this._increment = 10;
  }

  @Input() set candidat(candidat: candidat) {
    this._candidat = candidat;
    if(candidat.listDossier)
      this._postes = candidat.listDossier;
    this.updateList();
  }

  ngOnChanges(record) {
    if (record.model && record.candidat.currentValue) {
      this._candidat = record.candidat.currentValue;
      this._postes = record.candidat.currentValue.listDossier;
      this.updateList();
    }
  }

  get pages(): number[] {
    var pages = [];
    for (var i = 0; i < this.maxPage; i++) {
      pages[i] = i+1;
    }
    return pages;
  }

  isSearch(index: number): boolean {
    var find: boolean;
    find = false;
    if (this._postes[index].intitule.toLowerCase().includes(this._search.toLowerCase())
      || this._postes[index].type_contrat.toLowerCase().includes(this._search.toLowerCase())
      || this._postes[index].lieu_travail.toLowerCase().includes(this._search.toLowerCase())) {
      find = true;
    }
    return find;
  }

  updateList() {
    this._displayPostes = [];
    var j: number = 0;
    for (let i = 0; i < this._postes.length; i++) {
      if (this.isSearch(i)) {
        this._displayPostes[j] = this._postes[i];
        j++;
      }
    }
  }

  ngOnInit() {
  }

  get candidat(): candidat {
    return this._candidat;
  }

  get postes(): Poste[] {
    return this._postes;
  }

  set postes(value: Poste[]) {
    this._postes = value;
  }

  get displayPostes(): any[] {
    return this._displayPostes;
  }

  set displayPostes(value: any[]) {
    this._displayPostes = value;
  }

  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.updateList();
  }

  get increment(): number {
    return this._increment;
  }

  set increment(value: number) {
    this._increment = value;
    this._page = 1;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get upperIndex(): number {
    return (this._page * this._increment) - 1;
  }

  get displayUpperIndex(): number {
    return Math.min(this._page * this._increment, this._displayPostes.length);
  }

  get lowerIndex(): number {
    return ((this._page - 1) * this._increment);
  }

  get displayLowerIndex(): number {
    return ((this._page - 1) * this._increment) + 1;
  }

  get maxPage() : number {
    return Math.ceil(this._displayPostes.length / this._increment);
  }

  nextPage() {
    this._page = Math.min(this._page+1, this.maxPage);
  }

  prevPage() {
    this._page = Math.max(this._page-1, 1);
  }

  setPage(page: number) {
    this._page = page;
  }

  setIncrement(increment: number) {
    this._increment = increment;
  }

  get nombrePostes(): number {
    return this._displayPostes.length;
  }

  get lespostes(): Poste[]{
    return this._displayPostes;
  }

}

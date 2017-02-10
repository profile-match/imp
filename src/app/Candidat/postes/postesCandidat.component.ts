import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {poste} from "../interfaces/post-cdd";
import {LES_POSTES} from "../postes/postes.mock"
import {candidat} from "../interfaces/candidat";

@Component({
  selector: 'app-postes-candidat',
  templateUrl: './postesCandidat.component.html',
  styleUrls: ['./postesCandidat.component.css']
})
export class PostesCandidatComponent implements OnInit {

  private _postes : poste[];
  private _page : number;
  private _increment : number;
  private _candidat : candidat;

  constructor() {
    this._postes = [];
    this._page = 1; // Le numero de page commance a 1
    this._increment = 10;
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
    return Math.min(this._page * this._increment, this._postes.length);
  }

  get lowerIndex(): number {
    return ((this._page - 1) * this._increment);
  }

  get displayLowerIndex(): number {
    return ((this._page - 1) * this._increment) + 1;
  }

  get maxPage() : number {
    return Math.ceil(this._postes.length / this._increment);
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
    console.log("increment : " + increment);
  }

  get nombrePostes(): number {
    return this._postes.length;
  }

  get lespostes(): poste[]{
    return this._postes;
  }

  @Input() set candidat(candidat: candidat) {
    this._candidat = candidat;
  }

  get pages(): number[] {
    var pages = [];
    for (var i = 0; i < this.maxPage; i++) {
      pages[i] = i+1;
    }
    return pages;
  }

  ngOnInit() {
    this._postes = LES_POSTES;
  }

}

import { Component, OnInit } from '@angular/core';
import {message} from "../interfaces/message";
import {LES_MESSAGES} from "./messages.mock";
import {candidat} from "../interfaces/candidat";

@Component({
  selector: 'app-messages-candidat',
  templateUrl: './messages-candidat.component.html',
  styleUrls: ['./messages-candidat.component.css']
})
export class MessagesCandidatComponent implements OnInit {

  private _messages : message[];
  private _page : number;
  private _increment : number;
  private _candidat : candidat;

  constructor() {
    this._messages = [];
    this._page = 1; // Le numero de page commance a 1
    this._increment = 10;
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
    return Math.min(this._page * this._increment, this._messages.length);
  }

  get lowerIndex(): number {
    return ((this._page - 1) * this._increment);
  }

  get displayLowerIndex(): number {
    return ((this._page - 1) * this._increment) + 1;
  }

  get nombreMessage(): number {
    return this._messages.length;
  }

  get increment(): number {
    return this._increment;
  }

  set increment(value: number) {
    this._increment = value;
    this._page = 1;
  }

  nextPage() {
    this._page = Math.min(this._page+1, this.maxPage);
  }

  prevPage() {
    this._page = Math.max(this._page-1, 1);
  }

  get pages(): number[] {
    var pages = [];
    for (var i = 0; i < this.maxPage; i++) {
      pages[i] = i+1;
    }
    return pages;
  }

  setPage(page: number) {
    this._page = page;
  }

  get maxPage() : number {
    return Math.ceil(this._messages.length / this._increment);
  }

  ngOnInit() {
    this._messages = LES_MESSAGES;
  }

  get lesmessages(): message[]{
    return this._messages;
  }

}

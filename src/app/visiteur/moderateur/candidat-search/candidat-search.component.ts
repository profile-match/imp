import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import {CandidatService} from "../../../shared/service/candidat.service";
import {Candidat} from "../../../candidat/interfaces/candidat";
import {ModerateurComponent} from "../moderateur.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-candidat-search',
  providers: [CandidatService],
  templateUrl: './candidat-search.component.html',
  styleUrls: ['./candidat-search.component.css']
})
export class CandidatSearchComponent implements OnInit {

  arrayOfNumbers: number[] = [100, 200, 300, 400, 500];

  private _bannir$: EventEmitter<any>;
 // candidats: Observable<Candidat[]>;
  private _candidats: Candidat[];
  selectedCandidat: Candidat;
  selectedC: Candidat;
  mod: ModerateurComponent;
  private searchTerms : Subject<string>;

  constructor(private candidatSearchService: CandidatService,
              private router: Router, private _sanitizer: DomSanitizer) {
      this.searchTerms = new Subject<string>();
    this._bannir$ = new EventEmitter();
    this._candidats = [];
  }

  ngOnInit() {
    this.getCandidats();
 /*   this.candidats = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.candidatSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Candidat[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Candidat[]>([]);
      });*/
  }

  get candidats(): Candidat[] {
    return this._candidats;
  }

  set candidats(value: Candidat[]) {
    this._candidats = value;
  }

  getCandidats(){
    this.candidatSearchService.getCandidats().subscribe(c => this._candidats = c);
  }

  autocompleListFormatter = (data: Candidat) : SafeHtml => {
    let html = `<span>${data.nom}</span>`;
    html += `<span> ${data.prenom}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(candidat: Candidat): void {
    //	this.mod.selectedCandidat = null;
    this.selectedCandidat = candidat;
  }

  @Output('personBannir') get bannir$(): EventEmitter<any> {
    return this._bannir$;
  }

  set bannir$(value: EventEmitter<any>) {
    this._bannir$ = value;
  }

  /**
   * Function to banish a person
   *
   * @param person
   */
  bannir(candidat: Candidat) {
    this._bannir$.emit(candidat);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import {CandidatService} from "../../../shared/service/candidat.service";
import {Candidat} from "../../../candidat/interfaces/candidat";
import {ModerateurComponent} from "../moderateur.component";

@Component({
  selector: 'app-candidat-search',
  providers: [CandidatService],
  templateUrl: './candidat-search.component.html',
  styleUrls: ['./candidat-search.component.css']
})
export class CandidatSearchComponent implements OnInit {

  candidats: Observable<Candidat[]>;
  selectedCandidat: Candidat;
  selectedC: Candidat;
  mod: ModerateurComponent;
  private searchTerms : Subject<string>;

  constructor(private candidatSearchService: CandidatService,
              private router: Router) {
      this.searchTerms = new Subject<string>();
  }

  ngOnInit() {
    this.candidats = this.searchTerms
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
      });
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(candidat: Candidat): void {
    //	this.mod.selectedCandidat = null;
    this.selectedCandidat = candidat;
  }
}
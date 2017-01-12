import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import { Observable } 	  from 'rxjs';

import { Candidat } from '../../candidat/interfaces/candidat';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CandidatService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private candidatsUrl = 'api/candidats';  // URL to web api

  constructor(private http: Http) { }

  search(term: string): Observable<Candidat[]> {
    return this.http
      .get(`app/candidats/?name=${term}`)
      .map((r: Response) => r.json().data as Candidat[]);
  }

  getCandidats(): Promise<Candidat[]> {
    return this.http.get(this.candidatsUrl)
      .toPromise()
      .then(response => response.json().data as Candidat[])
      .catch(this.handleError);
  }

  getCandidat(id: number): Promise<Candidat> {
    const url = `${this.candidatsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Candidat)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  getCandidatsSlowly(): Promise<Candidat[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCandidats()), 2000);
    });
  }

}

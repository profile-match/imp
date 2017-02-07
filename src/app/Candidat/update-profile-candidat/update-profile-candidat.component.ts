import {Component, OnInit, Output, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {candidat} from "../../interfaces/candidat";

@Component({
  selector: 'modifier-candidat',
  templateUrl: './update-profile-candidat.component.html',
  styleUrls: ['./update-profile-candidat.component.css']
})
export class UpdateProfileCandidatComponent implements OnInit {

  private _backendURL: any;

  private _candidat: candidat;

  constructor(private _route: ActivatedRoute, private _router: Router, private _http: Http) {
    this.candidat= {};
    this.candidat.experiencePro = {};
    this.candidat.formation = {};
    this.candidat.competence= [];

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  get candidat(): any {
    return this._candidat;
  }

  @Input() set candidat(value: any) {
    this._candidat = value;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._route.params
      .map((params: any) => params.id)
      .flatMap((id: string) => this._fetchOne(id))
      .subscribe((candidat: candidat) => this._candidat = candidat);
  }

  /**
   * Function to update person by id and redirect to people list
   *
   * @param person
   */
  onSubmit() {
    this._http.put(this._backendURL.modifierCandidat.replace(':id', this.candidat.id), this.candidat)
      .subscribe(() => this._router.navigate(['/']));
  }

  /**
   * Function to cancel process and redirect to people list
   */
  cancel() {
    this._router.navigate(['/']);
  }

  /**
   * Returns an observable fetchs one person by id
   *
   * @param id
   *
   * @returns {Observable<R>}
   *
   * @private
   */
  private _fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.getCandidat.replace(':id', id))
      .map(res => {
        if (res.status === 200) {
          return res.json();
        }
        else {
          return this._candidat;
        }
      });
  }

}

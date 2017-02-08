import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
// import {Http} from "@angular/http";
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";

@Component({
  selector: 'app-profile-candidat',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileCandidatComponent implements OnInit {

  private _candidat: candidat;
  private _dialogStatus: string;
  private _backendURL: any;

  constructor(private _candidatService: CandidatService) {
    this._dialogStatus = 'inactive';

    // this._backendURL = {};
    //
    // // build backend base url
    // let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    // // if (environment.backend.port) {
    // if (environment.backend) {
    //   // baseUrl += `:${environment.backend.port}`;
    //   baseUrl += `:${environment.backend}`;
    // }

    // build all backend urls
    // Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  ngOnInit() {
    this._candidatService.getCandidat(1).subscribe();
  }

  get candidat(): candidat {
    return this._candidat;
  }

  // set Candidat(value: Candidat) {
  //   this._candidat = value;
  // }

  get _candidatName(): String {
    return this._candidat.nom;
  }

  get _candidatFName(): String {
    return this._candidat.prenom;
  }

  get _candidatId(): number {
    return this._candidat.id;
  }

  // get _candidatAddress():string{
  //   return this._candidat.address;
  // }

  get _candidatEmail(): string {
    return this._candidat.email;
  }

  // get _candidatPhoneFix():string{
  //   return this._candidat.phone_fix;
  // }
  //
  // get _candidatPhoneMobile():string{
  //   return this._candidat.phone_mobile;
  // }

  get _candidatBanned(): boolean {
    return this._candidat.banned;
  }

  setCandidatBanned(bool: boolean) {
    this._candidat.banned = bool;
  }

  get dialogStatus(): string {
    return this._dialogStatus
  }

  /**
   * Function to display modal
   */
  showDialog() {
    this._dialogStatus = 'active';
  }

  /**
   * Function to hide modal
   */
  hideDialog() {
    this._dialogStatus = 'inactive';
  }

}

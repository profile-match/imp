import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {candidat} from "../../interfaces/candidat";
import {CandidatService} from "../../shared/candidat.service";

@Component({
  selector: 'modifier-candidat',
  templateUrl: './update-profile-candidat.component.html',
  styleUrls: ['./update-profile-candidat.component.css']
})
export class UpdateProfileCandidatComponent implements OnInit {
  private _candidat: candidat;

  private _id : string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _candidatService: CandidatService) {
    this.id = "";
    this.candidat = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._route.params
      .map((params: any) => params.id)
      .subscribe((id: string) => this.id = id);

    this._candidatService.getCandidat(this.id).subscribe((candidat: candidat) => this._candidat = candidat);
  }

  updateCandidat(c: candidat) {
    this._candidatService.updateCandidat(c).subscribe();
  }

  cancel() {
    this._router.navigate(['/']);
  }

  get candidat(): any {
    return this._candidat;
  }

  set candidat(value: any) {
    this._candidat = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }


}
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {candidat} from "../interfaces/candidat";
import {Router} from "@angular/router";
import {CandidatService} from "../../shared/service/candidat.service";

@Component({
  selector: 'creer-profile-candidat',
  templateUrl: './creer-profile-candidat.component.html',
  styleUrls: ['./creer-profile-candidat.component.css']
})

export class CreerProfileCandidatComponent implements OnInit {

  constructor(private _router: Router, private _candidatService: CandidatService) {
  }

  createCandidat(candidat:candidat){
    this._candidatService.createCandidat(candidat).subscribe();
  }

  cancel(){
    this._router.navigate(['/']);
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }


}

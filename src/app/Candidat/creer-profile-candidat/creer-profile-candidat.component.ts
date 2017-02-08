import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import {candidat} from "../../interfaces/candidat";
import {CandidatService} from "../../shared/candidat.service";

@Component({
  selector: 'creer-profile-candidat',
  templateUrl: './creer-profile-candidat.component.html',
  styleUrls: ['./creer-profile-candidat.component.css']
})

export class CreerProfileCandidatComponent implements OnInit {

  constructor(private _candidatService: CandidatService) {
  }

  createCandidat(candidat:candidat){
    this._candidatService.createCandidat(candidat).subscribe();
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }


}

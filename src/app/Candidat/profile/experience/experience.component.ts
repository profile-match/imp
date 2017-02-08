import {Component, OnInit, Input} from '@angular/core';
import {candidat} from "../../interfaces/candidat";
import {experience} from "../../interfaces/experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private _candidat: candidat;

  constructor() {
    // this.Candidat = PROFILE;
  }

  ngOnInit() {
  }

  get candidat(): candidat {
    return this._candidat;
  }

  @Input() set candidat(value: candidat) {
    this._candidat = value;
  }

  get candidatExperience(): experience {
    return this._candidat.experiencePro;
  }


}

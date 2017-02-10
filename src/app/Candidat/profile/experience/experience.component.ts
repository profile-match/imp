import {Component, OnInit, Input} from '@angular/core';
import {experience} from "../../interfaces/experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private _experiences: experience[];

  constructor() {
    this._experiences = [];
  }

  ngOnInit() {
  }

  get experiences(): experience[] {
    return this._experiences;
  }

  @Input() set experiences(value: experience[]) {
    // console.log(value);
    this._experiences = value;
  }

}

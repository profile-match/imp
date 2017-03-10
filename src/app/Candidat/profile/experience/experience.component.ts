import {Component, OnInit, Input} from '@angular/core';
import {experiencePro} from "../../interfaces/experiencePro";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private _experiences: experiencePro[];

  constructor() {
    this._experiences = [];
  }

  ngOnInit() {
  }

  get experiences(): experiencePro[] {
    return this._experiences;
  }

  @Input() set experiences(value: experiencePro[]) {
    // console.log(value);
    this._experiences = value;
  }

}

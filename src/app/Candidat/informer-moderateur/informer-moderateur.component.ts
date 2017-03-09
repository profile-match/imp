import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-informer-moderateur',
  templateUrl: './informer-moderateur.component.html',
  styleUrls: ['./informer-moderateur.component.css']
})
export class InformerModerateurComponent implements OnInit {

  private _form:FormGroup;

  constructor() { }

  get form(): FormGroup {
    return this._form;
  }

  ngOnInit() {
  }

}

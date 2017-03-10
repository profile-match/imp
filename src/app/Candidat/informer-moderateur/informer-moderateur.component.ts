import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {CandidatService} from "../../shared/service/candidat.service";
import {FormGroup, FormControl} from "@angular/forms";
import {signalementCandidat} from "../interfaces/signalementCandidat";

@Component({
  selector: 'app-informer-moderateur',
  templateUrl: './informer-moderateur.component.html',
  styleUrls: ['./informer-moderateur.component.css']
})
export class InformerModerateurComponent implements OnInit {

  private _form:FormGroup;
  private _signalement = <signalementCandidat>{};
  private _submit:EventEmitter<any>;
  private _cancel:EventEmitter<any>;

  constructor(private _candidatService:CandidatService) {
    this._signalement.description = "";
    this._signalement.titre = "";
    this._submit = new EventEmitter();
    this._cancel = new EventEmitter();
    this._form = this._buildForms();
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

  get signalement(): signalementCandidat {
    return this._signalement;
  }

  set signalement(value: signalementCandidat) {
    this._signalement = value;
  }

  @Output('submit') get submit$(): EventEmitter<any> {
    return this._submit;
  }

  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel;
  }

  ngOnInit() {
  }

  cancel() {
    this._cancel.emit();
  }

  submit(){
    this._candidatService.signalementCandidat(this._signalement);
  }

  private _buildForms(): FormGroup {
    return new FormGroup({
      titre: new FormControl(''),
      description: new FormControl('')
    });
  }

}

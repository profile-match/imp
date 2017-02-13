import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import {EmailValidators} from "./email-validators";

@Component({
  selector: 'app-form-invitation',
  templateUrl: './form-invitation.component.html',
  styleUrls: ['./form-invitation.component.css']
})
export class FormInvitationComponent implements OnInit {

  private _model:any;
  private _form: FormGroup;
  private _cancel$: EventEmitter<any>;
  private _submit$: EventEmitter<any>;

  constructor() {
    this._model = {};
    this._form = this._buildForm();
    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();
  }

  ngOnInit() {
  }

  get model(): any {
    return this._model;
  }

  get form(): FormGroup {
    return this._form;
  }

  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  @Output('submit') get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  cancel() {
    this._cancel$.emit();
  }

  submit(mails : any){
    this._submit$.emit(mails);
  }


  ngOnChanges(record) {
    if(record.model && record.model.currentValue) {
      this._model = record.model.currentValue;
      this._form.patchValue(this._model);
    }
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,  EmailValidators.estMailValide
      ]))
    });
  }


}

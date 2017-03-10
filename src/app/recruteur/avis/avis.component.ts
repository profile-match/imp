import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {


  private _model:any;
  private _form: FormGroup;
  private _cancel$: EventEmitter<any>;
  private _submit$: EventEmitter<any>;

  constructor() {
    this._model = {};

    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();
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

  submit(avis : any){
    this._submit$.emit(avis);
  }


  ngOnInit() {
  }

}

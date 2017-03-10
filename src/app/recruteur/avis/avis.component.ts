import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Avis} from "../interfaces/avis";

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
  private _avis = <Avis>{};

  valeurs = [
    {id: 1, name: 1},
    {id: 2, name: 2},
    {id: 3, name: 3},
    {id: 4, name: 4},
    {id: 5, name: 5}
  ];
  selectedValue = 1;

  constructor() {
    this._model = {};
    this._avis.description = "";
    this._avis.note = 1;
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

  submit(){

    this._submit$.emit(this._avis);
  }


  ngOnInit() {
  }


  get avis(): Avis {
    return this._avis;
  }

  set avis(value: Avis) {
    this._avis = value;
  }

}

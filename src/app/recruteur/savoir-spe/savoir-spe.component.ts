import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ng2-savoirSpe',
  templateUrl: './savoir-spe.component.html',
  styleUrls: ['./savoir-spe.component.css']
})
export class SavoirSpeComponent implements OnInit {

  // private property to store savoir value
  private _savoir: any;
  // private property to store delete$ value
  private _delete$: EventEmitter<any>;

  constructor() {
    this._savoir = {};
    this._delete$ = new EventEmitter();
  }

  /**
   * Returns private property _savoir
   *
   * @returns {any}
   */
  get savoir(): any {
    return this._savoir;
  }

  /**
   * Sets private property _savoir
   *
   * @param person
   */
  @Input() set savoir(savoir: any) {
    this._savoir = savoir;
  }


  /**
   * Returns private property _delete$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('savoirSpeDelete') get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(savoir: any) {
    this._delete$.emit(savoir);
  }

  ngOnInit() {
  }

}

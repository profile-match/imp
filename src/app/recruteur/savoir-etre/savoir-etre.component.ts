import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'ng2-savoirEtre',
  templateUrl: './savoir-etre.component.html',
  styleUrls: ['./savoir-etre.component.css']
})
export class SavoirEtreComponent implements OnInit {

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
  @Output('savoirEtreDelete') get delete$(): EventEmitter<any> {
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

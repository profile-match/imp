import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Savoir} from "../classes/savoir";

@Component({
  selector: 'ng2-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  // private property to store savoir value
  private _savoir: Savoir;
  // private property to store delete$ value
  private _delete$: EventEmitter<any>;

  constructor() {
    this._delete$ = new EventEmitter();
  }

  /**
   * Returns private property _savoir
   *
   * @returns {any}
   */
  get savoir(): Savoir {
    return this._savoir;
  }

  /**
   * Sets private property _savoir
   *
   * @param person
   */
  @Input() set savoir(savoir: Savoir) {
    this._savoir = savoir;
  }


  /**
   * Returns private property _delete$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('certificationDelete') get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(savoir: Savoir) {
    this._delete$.emit(savoir);
  }

  ngOnInit() {
  }
}

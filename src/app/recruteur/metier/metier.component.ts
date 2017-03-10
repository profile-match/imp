import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ng2-metier',
  templateUrl: './metier.component.html',
  styleUrls: ['./metier.component.css']
})
export class MetierComponent implements OnInit {

  // private property to store metier value
  private _metier: any;
  // private property to store delete$ value
  private _delete$: EventEmitter<any>;

  constructor() {
    this._metier = {};
    this._delete$ = new EventEmitter();
  }

  /**
   * Returns private property _metier
   *
   * @returns {any}
   */
  get metier(): any {
    return this._metier;
  }

  /**
   * Sets private property _metier
   *
   * @param person
   */
  @Input() set metier(metier: any) {
    this._metier = metier;
  }


  /**
   * Returns private property _delete$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('metierDelete') get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(metier: any) {
    this._delete$.emit(metier);
  }

  ngOnInit() {
  }

}

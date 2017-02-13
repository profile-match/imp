import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor() { }

  /**
   *
   * @param texte
   * @param type : type de notification : {"success", "error"}
   */
  addNotification(texte : String , type : String){
    this.emitChangeSource.next({
      "message" : texte ,
      "type" : type
      }
    );

  }




}

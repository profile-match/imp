import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/service/authentication.service";
import {MailService} from "./shared/service/mail.service";
import {Observable} from "rxjs";
import {NotificationService} from "./shared/service/notification.service";




@Component({
  selector: 'app-root',
  providers: [AuthenticationService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _dialogStatusInvitation = 'inactive';
  private _timer ;
  private _notification : any ;

  constructor(private _service:AuthenticationService, private _mailService : MailService, private _notificationService : NotificationService) {

    this._dialogStatusInvitation = 'inactive';
    this._notification = {};
  }

  ngOnInit() {
    this._notificationService.changeEmitted$.subscribe(
      (res : any ) => {
        this._notification = res;
      });

  }

  sendMail(mail : any){
    this._mailService.envoyerMail(mail)
      .subscribe( (res : any) => {

        if(res['success'] === "success"){
          this._notificationService.addNotification("Message envoyé ! ", "success");
        } else{
          this._notificationService.addNotification("erreur lors de l'envoie du message ", "error");
        }
        this._timer = Observable.timer(6000).subscribe(_ => this.closeNotif()) ;
      });
    this.hideDialog();
  }

  get notification() : any{
    return this._notification;
  }
  closeNotif(){
    this._timer.unsubscribe();
    this._notification = {};
  }

  get dialogStatusInvitation(): string {
    return this._dialogStatusInvitation;
  }

  showDialog() {
    this._dialogStatusInvitation = 'active';
  }

  hideDialog() {
    this._dialogStatusInvitation = 'inactive';
  }

  logout() {
    this._service.logout();
  }

  login() {
    return this._service.isLogin();
  }

  isCandidat(){
    return this._service.isCandidat();
  }

  isRecruteur(){
    return this._service.isRecruteur();
  }

  isAdmin(){
    return this._service.isAdmin();
  }

}

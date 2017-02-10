import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/service/authentication.service";
import {MailService} from "./shared/service/mail.service";




@Component({
  selector: 'app-root',
  providers: [AuthenticationService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _dialogStatusInvitation = 'inactive';
  private  _notification : boolean;
  private _typeNotification : string
  private _message : string ;

  constructor(private _service:AuthenticationService, private _mailService : MailService){

    this._dialogStatusInvitation = 'inactive';
    this._notification = false;
    this._typeNotification = "";

  }

  sendMail(mail : any){
    this._mailService.envoyerMail(mail)
      .subscribe( (res : any) => {
        this._notification = true;
        this._typeNotification = res['success'] === "success" ? "success" : "error";
      });
    this.hideDialog();
  }

  get message() : string{
    return this._message;
  }

  get typeNotification() : string{
    return this._typeNotification;
  }

  get notification() : boolean{
    return this._notification;
  }
  closeNotif(){
    this._notification = false;
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

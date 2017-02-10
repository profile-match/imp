import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/service/authentication.service";
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import {MailService} from "./shared/service/mail.service";

@Component({
  selector: 'app-root',
  providers: [AuthenticationService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _dialogStatusInvitation = 'inactive';


  constructor(private _service:AuthenticationService, private _mailService : MailService){

    this._dialogStatusInvitation = 'inactive';

  }

  sendMail(mail : any){
    this._mailService.envoyerMail(mail)
      .subscribe( _ => {
        this.hideDialog();
      });
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

import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/service/authentication.service";


@Component({
  selector: 'app-root',
  providers: [AuthenticationService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _service:AuthenticationService
    ){}

  logout() {
    this._service.logout();
  }

  login() {
    return this._service.isLogin();
  }
}

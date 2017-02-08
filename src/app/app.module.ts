import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from './app.routes';

import {AppComponent} from './app.component';
import { SendinvitationComponent } from './sendinvitation/sendinvitation.component';

@NgModule({
  declarations: [
    AppComponent,
    SendinvitationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

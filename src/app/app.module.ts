import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from "./app.component";
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';
import {APP_ROUTES} from "./app.routes";
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    FooterComponent,

    LoginComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routes} from './app.router';



import { AppComponent } from './app.component';
import { OffreComponent } from './offres/offre.component';
import { OffreDetailComponent } from './offres/offre-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    OffreDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ]
})
export class AppModule { }

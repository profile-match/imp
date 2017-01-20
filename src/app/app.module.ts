import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import {routes} from './app.router';



import { AppComponent } from './app.component';
import { OffreComponent } from './offres/offre.component';
import { OffreDetailComponent } from './offres/offre-detail.component';
import { AddOffreComponent } from './offres/add-offre.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    OffreDetailComponent,
    AddOffreComponent,
    CandidatsComponent,
    PageNotFoundComponent,
    DashboardComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './visiteur/moderateur/candidat-search/rxjs-extensions';

import { APP_ROUTES } from './app.routes';

// Imports for loading & configuring the in-memory web api

import { CandidatService } from './shared/service/candidat.service';

import { AppComponent } from './app.component';
import { PosteFormComponent } from './recruteur/poste-form/poste-form.component';
import { AccueilComponent } from './visiteur/accueil/accueil.component';
import { LoginComponent } from './visiteur/login/login.component';
import { ModerateurComponent } from './visiteur/moderateur/moderateur.component';
import { CandidatDetailComponent } from './visiteur/moderateur/candidat-detail/candidat-detail.component';
import { CandidatSearchComponent } from './visiteur/moderateur/candidat-search/candidat-search.component';
import { SignalementComponent } from './visiteur/moderateur/signalement/signalement.component';
import {DashboardCandidatComponent} from "./candidat/dashboard/dashboardCandidat.component";
import {PostesCandidatComponent} from './candidat/postes/postesCandidat.component';
import { MessagesCandidatComponent } from './candidat/messages-candidat/messages-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    PosteFormComponent,
    AccueilComponent,
    LoginComponent,
    ModerateurComponent,
    CandidatDetailComponent,
    CandidatSearchComponent,
    SignalementComponent,
    DashboardCandidatComponent,
    PostesCandidatComponent,
    MessagesCandidatComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

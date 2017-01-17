import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import './visiteur/moderateur/candidat-search/rxjs-extensions';

import { APP_ROUTES } from './app.routes';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { CandidatService } from './shared/service/candidat.service';

import { AppComponent } from './app.component';
import { PosteFormComponent } from './recruteur/poste-form/poste-form.component';
import { AccueilComponent } from './visiteur/accueil/accueil.component';
import { LoginComponent } from './visiteur/login/login.component';
import { ModerateurComponent } from './visiteur/moderateur/moderateur.component';
import { CandidatDetailComponent } from './visiteur/moderateur/candidat-detail/candidat-detail.component';
import { CandidatSearchComponent } from './visiteur/moderateur/candidat-search/candidat-search.component';
import { SignalementComponent } from './visiteur/moderateur/signalement/signalement.component';
import { RecruteurService } from "./shared/service/recruteur.service";
import { RecruteurDetailComponent } from './visiteur/moderateur/recruteur-detail/recruteur-detail.component';

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
    RecruteurDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [CandidatService,RecruteurService],
  bootstrap: [AppComponent]
})
export class AppModule { }

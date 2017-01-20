import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import { ChartsModule } from 'ng2-charts/ng2-charts';

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
import { InscriptionUtilisateurComponent } from "./utilisateur/inscription/inscription-utilisateur.component";
import { ModerateurComponent } from './visiteur/moderateur/moderateur.component';
import { CandidatDetailComponent } from './visiteur/moderateur/candidat-detail/candidat-detail.component';
import { CandidatSearchComponent } from './visiteur/moderateur/candidat-search/candidat-search.component';
import { SignalementComponent } from './visiteur/moderateur/signalement/signalement.component';
import { RecruteurService } from "./shared/service/recruteur.service";
import { RecruteurDetailComponent } from './visiteur/moderateur/recruteur-detail/recruteur-detail.component';
import { Utilisateur } from './utilisateur/utilisateur';


@NgModule({
  declarations: [
    AppComponent,
    PosteFormComponent,
    AccueilComponent,
    LoginComponent,
    InscriptionUtilisateurComponent,
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
    RouterModule,
    APP_ROUTES,
    ChartsModule
   // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [CandidatService,RecruteurService, Utilisateur],
  bootstrap: [AppComponent]
})
export class AppModule { }

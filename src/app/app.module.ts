import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from "@angular/router";
import { ChartsModule } from 'ng2-charts/ng2-charts';

// noinspection TypeScriptCheckImport
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { MdInputModule } from '@angular/material/input';

import './visiteur/moderateur/candidat-search/rxjs-extensions';

import { APP_ROUTES } from './app.routes';

import { CandidatService } from './shared/service/candidat.service';

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


import { AppComponent } from './app.component';
import { PosteFormComponent } from './recruteur/poste-form/poste-form.component';
import { SavoirSpeComponent } from './recruteur/savoir-spe/savoir-spe.component';
import { SavoirEtreComponent } from './recruteur/savoir-etre/savoir-etre.component';
import { SavoirFaireComponent } from './recruteur/savoir-faire/savoir-faire.component';
import { MetierComponent } from './recruteur/metier/metier.component';
import { FonctionnelleComponent } from './recruteur/fonctionnelle/fonctionnelle.component';
import { TechniqueComponent } from './recruteur/technique/technique.component';
import { LinguistiquesComponent } from './recruteur/linguistiques/linguistiques.component';
import { FormationComponent } from './recruteur/formation/formation.component';
import { UpdateComponent } from './recruteur/poste-form/update/update.component';

import { CertificationComponent } from './recruteur/certification/certification.component';
import { InscriptionLinkedinComponent } from './utilisateur/inscription-linkedin/inscription-linkedin.component';



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
    RecruteurDetailComponent,

    SavoirSpeComponent,
    SavoirEtreComponent,
    SavoirFaireComponent,
    MetierComponent,
    FonctionnelleComponent,
    TechniqueComponent,
    LinguistiquesComponent,
    FormationComponent,
    UpdateComponent,
    CertificationComponent,
    InscriptionLinkedinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTES,
    MdInputModule,
    Ng2AutoCompleteModule,
    ChartsModule
  ],
  providers: [CandidatService,RecruteurService],
  bootstrap: [AppComponent]
})
export class AppModule { }

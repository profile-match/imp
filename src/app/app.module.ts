import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
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
import {createService} from "./recruteur/services/createService";


@NgModule({
  declarations: [
    AppComponent,
    PosteFormComponent,
    SavoirSpeComponent,
    SavoirEtreComponent,
    SavoirFaireComponent,
    MetierComponent,
    FonctionnelleComponent,
    TechniqueComponent,
    LinguistiquesComponent,
    FormationComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

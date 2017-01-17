import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PosteFormComponent } from './recruteur/poste-form/poste-form.component';
import { SavoirSpeComponent } from './recruteur/savoir-spe/savoir-spe.component';
import { SavoirEtreComponent } from './recruteur/savoir-etre/savoir-etre.component';
import { SavoirFaireComponent } from './recruteur/savoir-faire/savoir-faire.component';
import { MetierComponent } from './recruteur/metier/metier.component';
import { FonctionnelleComponent } from './recruteur/fonctionnelle/fonctionnelle.component';
import { TechniqueComponent } from './recruteur/technique/technique.component';
import { LinguistiquesComponent } from './recruteur/linguistiques/linguistiques.component';

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
    LinguistiquesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

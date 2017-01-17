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

@NgModule({
  declarations: [
    AppComponent,
    PosteFormComponent,
    SavoirSpeComponent,
    SavoirEtreComponent,
    SavoirFaireComponent,
    MetierComponent
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

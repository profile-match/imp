import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from './app.routes';

import {AppComponent} from './app.component';
import {CandidatService} from "./shared/candidat.service";
import {CreerProfileCandidatComponent} from "./Candidat/creer-profile-candidat/creer-profile-candidat.component";
import {UpdateProfileCandidatComponent} from "./Candidat/update-profile-candidat/update-profile-candidat.component";
import { FormComponent } from './Candidat/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreerProfileCandidatComponent,
    UpdateProfileCandidatComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTES
  ],
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

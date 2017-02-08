import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from "@angular/router";

import { APP_ROUTES } from './app.routes';

import { CandidatService } from './shared/service/candidat.service';

import { AppComponent } from './app.component';
import { ProfileCandidatComponent, ExperienceComponent, CompetenceComponent, FormationComponent } from './Candidat/profile/'


@NgModule({
  declarations: [
    AppComponent,
    ProfileCandidatComponent,
    CompetenceComponent,
    ExperienceComponent,
    FormationComponent
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
export class AppModule { }

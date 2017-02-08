import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OffreComponent } from './offres/offre.component';
import { AddOffreComponent } from './offres/add-offre.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const router: Routes =  [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'offres', component: OffreComponent },
  { path: 'blankpage', component: CandidatsComponent },
  { path: 'offres/addOffer', component: AddOffreComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //by default the offres page will be shown, it will be changed
  { path: '**', component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



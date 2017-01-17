import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS


import { AccueilComponent } from './visiteur/accueil/accueil.component';
import {PosteFormComponent} from "./recruteur/poste-form/poste-form.component";
import {ModerateurComponent} from "./visiteur/moderateur/moderateur.component";
import {LoginComponent} from "./visiteur/login/login.component";
import {DashboardCandidatComponent} from "./candidat/dashboard/dashboardCandidat.component";
import {PostesCandidatComponent} from "./candidat/postes/postesCandidat.component";
import {MessagesCandidatComponent} from "./candidat/messages-candidat/messages-candidat.component";




const ROUTES: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent},
  { path: 'poste-form', component: PosteFormComponent },
  { path: 'moderateur', component: ModerateurComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candidat', component: DashboardCandidatComponent},
  { path: 'candidat/postes', component: PostesCandidatComponent},
  { path: 'candidat/messages', component: MessagesCandidatComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

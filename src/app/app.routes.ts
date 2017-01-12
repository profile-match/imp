import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS


import { AccueilComponent } from './visiteur/accueil/accueil.component';
import {PosteFormComponent} from "./recruteur/poste-form/poste-form.component";
import {ModerateurComponent} from "./visiteur/moderateur/moderateur.component";
import {LoginComponent} from "./visiteur/login/login.component";




const ROUTES: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent},
  { path: 'poste-form', component: PosteFormComponent },
  { path: 'moderateur', component: ModerateurComponent },
  { path: 'login', component: LoginComponent }

];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
import {RouterModule, Routes} from '@angular/router';

// APP COMPONENTS

import {UpdateComponent} from './recruteur/poste-form/update/'
import {AccueilComponent} from './visiteur/accueil/accueil.component';
import {ModerateurComponent} from "./visiteur/moderateur/moderateur.component";
import {PosteFormComponent} from './recruteur/poste-form/poste-form.component';
import {LoginComponent} from "./visiteur/login/login.component";
import {InscriptionUtilisateurComponent} from "./utilisateur/inscription/inscription-utilisateur.component";
import {InscriptionLinkedinComponent} from "./utilisateur/inscription-linkedin/inscription-linkedin.component";

const ROUTES: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'moderateur', component: ModerateurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription-utilisateur', component: InscriptionUtilisateurComponent},
  {path: 'inscription-linkedin', component: InscriptionLinkedinComponent},
  {path: 'addPost', component: PosteFormComponent},
  {path: 'editPost/:id', component: UpdateComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

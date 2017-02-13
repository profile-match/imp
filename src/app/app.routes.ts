import {CreerProfileCandidatComponent} from "./Candidat/creer-profile-candidat/creer-profile-candidat.component";
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

// APP COMPONENTS

import {UpdateComponent} from './recruteur/poste-form/update/'
import {AccueilComponent} from './visiteur/accueil/accueil.component';
import {ModerateurComponent} from "./visiteur/moderateur/moderateur.component";
import {PosteFormComponent} from './recruteur/poste-form/poste-form.component';
import {LoginComponent} from "./visiteur/login/login.component";
import {InscriptionUtilisateurComponent} from "./utilisateur/inscription/inscription-utilisateur.component";
import {OffreComponent} from './recruteur/offres/offre.component';
import {InscriptionLinkedinComponent} from "./utilisateur/inscription-linkedin/inscription-linkedin.component";
import {UpdateProfileCandidatComponent} from "./Candidat/update-profile-candidat/update-profile-candidat.component";
import {DashboardCandidatComponent} from "./Candidat/dashboard/dashboardCandidat.component";
import {ProfileCandidatComponent} from "./Candidat/profile/profile.component";

const ROUTES: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'moderateur', component: ModerateurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription-utilisateur', component: InscriptionUtilisateurComponent},
  {path: 'addPost', component: PosteFormComponent},
  {path: 'editPost/:id', component: UpdateComponent},
  {path: '', redirectTo: 'createCandidat', pathMatch: 'full'},
  {path: 'createCandidat', component: CreerProfileCandidatComponent},
  {path: 'editCandidat/:id', component: UpdateProfileCandidatComponent},
  {path: 'candidat/:id', component: DashboardCandidatComponent},
  {path: 'inscription-linkedin', component: InscriptionLinkedinComponent},
  {path: 'candidat/profile/:id', component: ProfileCandidatComponent},
  {path: 'dashboardRecruteur', component: OffreComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

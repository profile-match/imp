import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS

import {ProfileCandidatComponent} from "./Candidat/profile/profile.component";




const ROUTES: Routes = [
  { path: '', redirectTo: '/candidat/profile', pathMatch: 'full' },
  { path: 'candidat/profile', component: ProfileCandidatComponent},
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS

import {ProfileCandidatComponent} from "./Candidat/profile/profile.component";




const ROUTES: Routes = [
  { path: '', redirectTo: '/candidat/profile/:id', pathMatch: 'full' },
  { path: 'candidat/profile/:id', component: ProfileCandidatComponent},
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

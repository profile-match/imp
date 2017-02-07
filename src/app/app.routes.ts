import { RouterModule, Routes } from '@angular/router';
import {CreerProfileCandidatComponent} from "./Candidat/creer-profile-candidat/creer-profile-candidat.component";
import {UpdateProfileCandidatComponent} from "./Candidat/update-profile-candidat/update-profile-candidat.component";

// APP COMPONENTS

const ROUTES: Routes = [
    {path: '', redirectTo: 'createCandidat', pathMatch: 'full'},
    {path: 'createCandidat', component: CreerProfileCandidatComponent},
    {path: 'editCandidat/:id', component: UpdateProfileCandidatComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

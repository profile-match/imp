import { RouterModule, Routes } from '@angular/router';
import {CreerProfileCandidatComponent} from "./creer-profile-candidat/creer-profile-candidat.component";
import {UpdateComponent} from "./update/update.component";

// APP COMPONENTS

const ROUTES: Routes = [
    {path: '', redirectTo: 'createCandidat', pathMatch: 'full'},
    {path: 'createCandidat', component: CreerProfileCandidatComponent},
    {path: 'editCandidat/:id', component: UpdateComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

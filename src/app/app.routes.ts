import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { PosteFormComponent } from './recruteur/poste-form/';
import {UpdateComponent} from './recruteur/poste-form/update/'

const ROUTES: Routes = [
  {path: '', redirectTo: 'addPost', pathMatch: 'full'},
  {path: 'addPost', component: PosteFormComponent},
  {path: 'editPost/:id', component: UpdateComponent}

];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

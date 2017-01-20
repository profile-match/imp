import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";




const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES,{useHash: true});

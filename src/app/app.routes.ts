import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { SendinvitationComponent } from "./sendinvitation/sendinvitation.component";

const ROUTES: Routes = [
    {path: '', redirectTo: 'envoyerInvitation', pathMatch: 'full'},
  {path: 'envoyerInvitation', component: SendinvitationComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);

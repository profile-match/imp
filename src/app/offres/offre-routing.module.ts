import { OffreComponent }    from './offre.component';
import { OffreDetailComponent }  from './offre-detail.component';

const OffresRoutes: Routes = [
  { path: 'offres',  component: OffreComponent },
  { path: 'offres/:id', component: OffreDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }





import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class OffresRoutingModule { }

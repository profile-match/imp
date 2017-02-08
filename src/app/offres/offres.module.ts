import { OffreRoutingModule } from './offre-routing.module';
import {OffreService} from "./offre.service";
import {OffreDetailComponent} from "./offre-detail.component";
import {OffreComponent} from "./offre.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OffreRoutingModule
  ],
  declarations: [
    OffreComponent,
    OffreDetailComponent
  ],
  providers: [
    OffreService
  ]
})

export class HeroesModule {}

import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {RecruteurService} from "../../shared/service/recruteur.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  private _iddossier: number;
  private _idcandidat: number;

  private certifications: any[];
  private formations: any[];
  private competences: any[];


  constructor(private _location: Location, private _service: RecruteurService,private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this._iddossier = params['iddossier'];
        this._idcandidat = params['idcandidat'];
    });
    this._service.matchingDossierCandidat(this._iddossier,this._idcandidat).subscribe(
      (res:any[])=> {
        this.competences = res[0];
        this.formations = res[1];
        this.certifications = res[2];
        console.log(this.competences);
      });
    //this._service.matchingDossier(this._poste).subscribe();
  }

  backClicked() {
    this._location.back();
  }

  linkCandidat(){
    //TODO cloturer l'offre et ajouter le candidat en tant que candidat embauché

  }
}

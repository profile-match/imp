import { Component, OnInit } from '@angular/core';
import {RecruteurService} from "../../shared/service/recruteur.service";
import {Poste} from "../../recruteur/interfaces/poste";
import {CandidatService} from "../../shared/service/candidat.service";
import {candidat} from "../interfaces/candidat";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rechercher-offres',
  templateUrl: './rechercher-offres.component.html',
  styleUrls: ['./rechercher-offres.component.css']
})
export class RechercherOffresComponent implements OnInit {

  private _listpostes : Poste[];

  constructor(private recruteurService:RecruteurService,private _candidatService: CandidatService, private _router: Router) {
    this.listpostes = [];
  }

  Postuler(p: Poste){
    if (localStorage.getItem("user") !== null) {
      this._candidatService.getCandidat(localStorage.getItem("user")).subscribe((candidat: candidat) => {
        this._candidatService.updateCandidatPost(candidat, p.id).subscribe();
        this._router.navigate(['/candidat/']);
      });
    }
  }

  get listpostes(): any[] {
    return this._listpostes;
  }

  set listpostes(value: any[]) {
    this._listpostes = value;
  }

  ngOnInit() {
    this.recruteurService.getPosts().subscribe(p => this._listpostes = p);
  }
}

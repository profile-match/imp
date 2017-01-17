import { Component, OnInit } from '@angular/core';
import {poste} from "../interfaces/post-cdd";
import {LES_POSTES} from "../postes/postes.mock"

@Component({
  selector: 'app-postes-candidat',
  templateUrl: './postesCandidat.component.html',
  styleUrls: ['./postesCandidat.component.css']
})
export class PostesCandidatComponent implements OnInit {

  private postes : poste[];

  constructor() {
    this.postes = [];
  }

  ngOnInit() {
    this.postes = LES_POSTES;
  }

  get poste(): poste{
    return this.postes[0];
  }

  get lespostes(): poste[]{
    return this.postes;
  }

}

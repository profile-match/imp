import { Component, OnInit } from '@angular/core';

import { Location }  from '@angular/common';
import {Candidat} from "../interfaces/candidat";


@Component({
  selector: 'app-inscription-candidat',
  templateUrl: 'inscription-candidat.component.html',
  styleUrls: ['inscription-candidat.component.css']
})
export class InscriptionCandidatComponent implements OnInit {
  class: string;
  query: string;
  result: string;
  candidat = <Candidat>{};

  constructor(private location: Location) {

    this.candidat.nom = "";
    this.candidat.prenom = "";
    this.candidat.email = "";
    this.candidat.loisirs = "";
    this.candidat.experiencePro = "";

    this.class = "icheckbox_flat-green";
    this.query = '';
    this.result = '';
  }

  onSubmit(): void {
  }

  getClass() {
  }

  ngOnInit() {
  }

}




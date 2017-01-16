import { Component, OnInit } from '@angular/core';
import {Candidat} from "../interfaces/candidat";
import {InMemoryDataService} from "../../in-memory-data.service";

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboardCandidat.component.html',
  styleUrls: ['./dashboardCandidat.component.css']
})
export class DashboardCandidatComponent implements OnInit {

  cdd : Candidat;

  constructor() {
    this.cdd = {id : 12,name : "jean",fname:"valjean"};
  }

  /*
   *  Return Candidat name
   */
  get cddname():String{
    return this.cdd.name;
  }

  /*
  * Return candidat ID
   */
  get cddID():number{
    return this.cdd.id;
  }



  ngOnInit() {
  }

}

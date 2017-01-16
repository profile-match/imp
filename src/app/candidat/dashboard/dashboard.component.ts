import { Component, OnInit } from '@angular/core';
import {Candidat} from "../interfaces/candidat";

@Component({
  selector: 'app-dashboard-candidat',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cdd : Candidat;

  constructor() {
    this.cdd = {};
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
  get cddID():String{
    return this.cdd.id;
  }



  ngOnInit() {
  }

}

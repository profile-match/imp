import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {CandidatService} from "../../../shared/service/candidat.service";
import { ToasterService} from 'angular2-toaster';
import {candidat} from "../../../Candidat/interfaces/candidat";


@Component({
  selector: 'app-gestion-avis-candidats',

  templateUrl: 'gestion-avis-candidats.component.html',
  styleUrls: ['gestion-avis-candidats.component.css'],

})
export class GestionAvisCandidatsComponent implements OnInit {
  private toasterService: ToasterService;




  private _data:any;
  private _rowsOnPage = 1;


  get rowsOnPage(): number {
    return this._rowsOnPage;
  }

  set rowsOnPage(value: number) {
    this._rowsOnPage = value;
  }

  get data(): any[] {
    return this._data;
  }

  set data(value: any[]) {
    this._data = value;
  }

  constructor(private candidatService: CandidatService,toasterService: ToasterService) {
    this.toasterService = toasterService;
    this._data = [{}];
  }



  ngOnInit() {
    this.candidatService.getCandidats().subscribe(candidats => this._data = candidats);
  }

  delete(avis,cand,element){

    var avisDeleted=element.target.innerHTML.toString();
    if(avisDeleted.indexOf("Supprimer")> -1){

      element.target.innerHTML="Supprimé";
      this.toasterService.pop('success', 'Information:', "L'avis est supprimé !");

      var index = this.data.indexOf(cand, 0);
      if (index > -1) {
        this.data.splice(index, 1);
      }
      // this.candidatService.bannir(candidat).subscribe(data => this._data = data);
    }



  }

  readMore(element){

    element.target.parentNode.hidden=true;
    element.target.parentNode.nextElementSibling.hidden=false;
  }

  readLess(element){
    element.target.parentNode.hidden=true;
    element.target.parentNode.previousElementSibling.hidden=false;  }
}

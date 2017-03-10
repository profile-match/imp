import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {CandidatService} from "../../../shared/service/candidat.service";
import { ToasterService} from 'angular2-toaster';


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
    this._data=[{

      "id":1,
      "nom":"wfeefwefwef"
      ,"prenom":"efwefefwewf"
      ,"email":"rfrfre",
      "loisirs":"wfwfewef"
      ,"photo":"weefwfew",
      "adresse":"ferffeer",
      "telfix":"fweefwefw",
      "telperso":"wfefwfewewf",
      "naissance":1489791600000,
      "listDossier":[],
      "experiencePro":[],
      "formation":[],
      "avis":[{"description":"wfwfwfwfe conard","note":6,"id":1},{"description":"wf wf wf salo","note":3,"id":1}],
      "isMale":true,"competence":[],"suspended":true,"banned":true,"dossierPoste":[]},
      {

        "id":1,
        "nom":"Afeefwefwef"
        ,"prenom":"efwefefwewf"
        ,"email":"rfrfre",
        "loisirs":"wfwfewef"
        ,"photo":"weefwfew",
        "adresse":"ferffeer",
        "telfix":"fweefwefw",
        "telperso":"wfefwfewewf",
        "naissance":1489791600000,
        "listDossier":[],
        "experiencePro":[],
        "formation":[],
        "avis":[{"description":"wfwfwfwfe","note":4,"id":1},{"description":"wfwfnn wfwfe hgygy huihuhu hgyugygyu ygyyyu ggftyf ftyf tftyttyt fuck you","note":3,"id":1}],
        "isMale":true,"competence":[],"suspended":true,"banned":true,"dossierPoste":[]}];
  }

  ngOnInit() {
   // this.candidatService.getCandidats().subscribe(candidats => this._data = candidats);
  }

  delete(avis,element){

   var avisDeleted=element.target.innerHTML.toString();
   if(avisDeleted.indexOf("Supprimer")> -1){

      element.target.innerHTML="Supprimé";
     this.toasterService.pop('success', 'Information:', "L'avis est supprimé !");

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

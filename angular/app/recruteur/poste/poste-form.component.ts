import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http'
import {Poste}    from './poste';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'poste-form',
  templateUrl: 'poste-form.component.html',
  styles: [`
    .ng-valid { border-color: green; }
    .ng-invalid { border-color: red; }
  `]
})

export class PosteFormComponent{

  class: string = "icheckbox_flat-green";
  private poste = new Poste("ref", "sdq", "qsd", 5, 2, 0, "tz", "qdqs", "test", "lux", "orga", "dep", "serv", "equipe",["test"]);
//"","","","",""
  onSubmit(): void {
/*alert(this.poste.reference + "ref");
 alert(this.poste.intitule + "int");
 alert(this.poste.indice_salaire + "indsal");

 alert(this.poste.salaire_min + "min");
 alert(this.poste.salaire_max + "max");
 alert(this.poste.afficher_moyenne + "affmoy");
 alert(this.poste.type_contrat + "typecontrat");
 alert(this.poste.resume + "resumé");
 alert(this.poste.point_attention + "ptsattention");
 alert(this.poste.lieu_travail + "lieutrav");
 alert(this.poste.organisation + "orga");
 alert(this.poste.departement + "departement");
 alert(this.poste.service + "service");
 alert(this.poste.equipe + "equipeee");*/
  }

  constructor(private http: Http){

  }

  public query= '';
  public result='';
  public savoirSpe=[""];

  filter(term: string) {
    if(term !="") {
      this.http.get("https://jsonplaceholder.typicode.com/posts/"+term)
        .map(response => response.json())
        .subscribe(result => this.result =result);
    }
  }



  searchSavoirSpecifique(){


  }

  getClass() {
    if (this.poste.afficher_moyenne == 0) {
      this.poste.afficher_moyenne = 1;
      this.class = "icheckbox_flat-green checked";
    } else {
      this.poste.afficher_moyenne = 0;
      this.class = "icheckbox_flat-green form-group";
    }
  }

}

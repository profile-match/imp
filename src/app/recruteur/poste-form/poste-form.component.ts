import {Component, OnInit} from '@angular/core';
import {Poste}    from '../interfaces/poste';
import {PosteService} from './poste.service';

@Component({
  selector: 'app-poste-form',
  templateUrl: './poste-form.component.html',
  styleUrls: ['./poste-form.component.css'],
  providers: [PosteService]
})
export class PosteFormComponent implements OnInit {

  //TODO : à mettre en private et ajouter des get
  class: string;
  query: string;
  result: string;
  private isChecked: boolean;
  //savoirSpe: string[];
  poste = <Poste>{};
  savoirAdded:any[]

  constructor(private posteServ: PosteService) {

    this.poste.reference = "ref";
    this.poste.intitule = "int";
    this.poste.indice_salaire = "ind";
    this.poste.salaire_min = 5;
    this.poste.salaire_max = 2;
    this.poste.afficher_moyenne = 0;
    this.poste.type_contrat = "tc";
    this.poste.resume = "res";
    this.poste.point_attention = "pa";
    this.poste.lieu_travail = "lieut";
    this.poste.organisation = "orga";
    this.poste.equipe_concernee = "equipe";
    //this.poste.savoirSpe = this.posteServ.getSavoirSpe();

    this.class = "icheckbox_flat-green";
    this.query = '';
    this.result = '';
    this.savoirAdded = [""];
    //this.savoirSpe = [""];
    this.isChecked = false;
  }


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

  /*
   filter(term: string) {
   if (term != "") {
   this.http.get("https://jsonplaceholder.typicode.com/posts/" + term)
   .map(response => response.json())
   .subscribe(result => this.result = result);
   }
   }
   */

  addSavoirSpe(): void {


  }

  onEnter(value: string) {
    this.savoirAdded.push("<span class=\"tag\"><span>"+value+"</span><a href=\"#\" title=\"Removing tag\">x</a></span>");
  }


  getSavoirSpe(): void {
    //this.poste.savoirSpe = this.posteService.getSavoirSpe();
  }

  getClass() {
    if (this.poste.afficher_moyenne == 0) {
      this.isChecked = true;
      this.poste.afficher_moyenne = 1;
    } else {
      this.isChecked = false;
      this.poste.afficher_moyenne = 0;
    }
  }

  ngOnInit() {
    // this.getHeroes();
  }

}




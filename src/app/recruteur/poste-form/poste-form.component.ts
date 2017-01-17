import {Component, OnInit} from '@angular/core';
import {Poste}    from '../interfaces/poste';
import {Savoir} from "../classes/savoir";

@Component({
  selector: 'app-poste-form',
  templateUrl: './poste-form.component.html',
  styleUrls: ['./poste-form.component.css']
})
export class PosteFormComponent implements OnInit {

  //TODO : à mettre en private et ajouter des get
  class: string;
  query: string;
  result: string;
  private isChecked: boolean;
  poste = <Poste>{};
  inputSavoirSpe: string;
  inputSavoirEtre: string;
  inputSavoirFaire: string;
  inputMetier: string;

  constructor() {

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
    this.poste.savoirSpe =  [];
    this.poste.savoirFaire = [];
    this.poste.savoirEtre = [];
    this.poste.metier = [];

    this.class = "icheckbox_flat-green";
    this.query = '';
    this.result = '';
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

  deleteSpe(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.savoirSpe) {
      ind++;
      if (i == savoir) {
        this.poste.savoirSpe.splice(ind-1, 1);
      }
    }
  }

  deleteEtre(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.savoirEtre) {
      ind++;
      if (i == savoir) {
        this.poste.savoirEtre.splice(ind-1, 1);
      }
    }
  }

  deleteFaire(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.savoirFaire) {
      ind++;
      if (i == savoir) {
        this.poste.savoirFaire.splice(ind-1, 1);
      }
    }
  }

  deleteMetier(metier: any) {
    let ind: any = 0;
    for (let i of this.poste.metier) {
      ind++;
      if (i == metier) {
        this.poste.metier.splice(ind-1, 1);
      }
    }
  }

  /**
   * Returns private property this.poste.savoirSpe
   *
   * @returns {any[]}
   */
  get savoirAddSpe(): any[] {
    return this.poste.savoirSpe;
  }

  /**
   * Returns private property _savoirAddEtre
   *
   * @returns {any[]}
   */
  get savoirAddEtre(): any[] {
    return this.poste.savoirEtre;
  }

  /**
   * Returns private property _savoirAddFaire
   *
   * @returns {any[]}
   */
  get savoirAddFaire(): any[] {
    return this.poste.savoirFaire;
  }

  /**
   * Returns private property _metierAdd
   *
   * @returns {any[]}
   */
  get metierAdd(): any[] {
    return this.poste.metier;
  }

  onEnterSpe(value: string, nb: number) {
    if (value != "") {
      this.poste.savoirSpe.push(new Savoir(value,nb));
      this.inputSavoirSpe = "";
    }
  }

  onEnterFaire(value: string, nb: number) {
    if (value != "") {
      this.poste.savoirFaire.push(new Savoir(value,nb));
      this.inputSavoirFaire = "";
    }
  }

  onEnterEtre(value: string, nb: number) {
    if (value != "") {
      this.poste.savoirEtre.push(new Savoir(value,nb));
      this.inputSavoirEtre = "";
    }
  }

  onEnterMetier(value: string, nb: number) {
    if (value != "") {
      this.poste.metier.push(new Savoir(value,nb));
      this.inputMetier = "";
    }
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

  }

}




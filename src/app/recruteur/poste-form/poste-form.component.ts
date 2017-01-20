import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  inputFonctionnelle: string;
  inputTechnique: string;
  inputLinguistiques: string;
  //

  private _cancel$: EventEmitter<any>;
  private _submit$: EventEmitter<any>;

  constructor() {

    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();

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
    this.poste.savoir_specifications = [];
    this.poste.savoir_faires = [];
    this.poste.savoir_etres = [];
    this.poste.metiers = [];
    this.poste.fonctionnelles = [];
    this.poste.techniques = [];
    this.poste.langues = [];

    this.inputSavoirSpe = "";
    this.inputSavoirEtre = "";
    this.inputSavoirFaire = "";
    this.inputMetier = "";
    this.inputFonctionnelle = "";
    this.inputTechnique = "";
    this.inputLinguistiques = "";

    this.class = "icheckbox_flat-green";
    this.query = '';
    this.result = '';
    this.isChecked = false;
  }


  @Input() set modele(post: Poste) {
    this.poste = post;
  }

  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  @Output('submit') get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  cancel() {
    this._cancel$.emit();
  }

  submit(): void {
    //tester si je suis en mode non edit
    //TODO
    if (true) {

    }
    this._submit$.emit(this.poste);
  }

  deleteSpe(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.savoir_specifications) {
      ind++;
      if (i == savoir) {
        this.poste.savoir_specifications.splice(ind - 1, 1);
      }
    }
  }

  deleteEtre(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.savoir_etres) {
      ind++;
      if (i == savoir) {
        this.poste.savoir_etres.splice(ind - 1, 1);
      }
    }
  }

  deleteFaire(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.savoir_faires) {
      ind++;
      if (i == savoir) {
        this.poste.savoir_faires.splice(ind - 1, 1);
      }
    }
  }

  deleteMetier(metier: any) {
    let ind: any = 0;
    for (let i of this.poste.metiers) {
      ind++;
      if (i == metier) {
        this.poste.metiers.splice(ind - 1, 1);
      }
    }
  }

  deleteFonctionnelle(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.fonctionnelles) {
      ind++;
      if (i == savoir) {
        this.poste.fonctionnelles.splice(ind - 1, 1);
      }
    }
  }

  deleteTechnique(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.techniques) {
      ind++;
      if (i == savoir) {
        this.poste.techniques.splice(ind - 1, 1);
      }
    }
  }

  deleteLinguistiques(savoir: any) {
    let ind: any = 0;
    for (let i of this.poste.langues) {
      ind++;
      if (i == savoir) {
        this.poste.langues.splice(ind - 1, 1);
      }
    }
  }

  /**
   * Returns private property this.poste.savoirSpe
   *
   * @returns {any[]}
   */
  get savoirAddSpe(): Savoir[] {
    return this.poste.savoir_specifications;
  }

  /**
   * Returns private property _savoirAddEtre
   *
   * @returns {any[]}
   */
  get savoirAddEtre(): Savoir[] {
    return this.poste.savoir_etres;
  }

  /**
   * Returns private property _savoirAddFaire
   *
   * @returns {any[]}
   */
  get savoirAddFaire(): Savoir[] {
    return this.poste.savoir_faires;
  }

  /**
   * Returns private property _metierAdd
   *
   * @returns {any[]}
   */
  get metierAdd(): Savoir[] {
    return this.poste.metiers;
  }

  get fonctionnelleAdd(): Savoir[] {
    return this.poste.fonctionnelles;
  }

  get techniqueAdd(): Savoir[] {
    return this.poste.techniques;
  }

  get linguistiquesAdd(): Savoir[] {
    return this.poste.langues;
  }

  onEnterSpe(value: string, nb: number) {
    if (value != "") {
      this.poste.savoir_specifications.push(new Savoir(value, nb));
      this.inputSavoirSpe = "";
    }
  }

  onEnterFaire(value: string, nb: number) {
    if (value != "") {
      this.poste.savoir_faires.push(new Savoir(value, nb));
      this.inputSavoirFaire = "";
    }
  }

  onEnterEtre(value: string, nb: number) {
    if (value != "") {
      this.poste.savoir_etres.push(new Savoir(value, nb));
      this.inputSavoirEtre = "";
    }
  }

  onEnterMetier(value: string, nb: number) {
    if (value != "") {
      this.poste.metiers.push(new Savoir(value, nb));
      this.inputMetier = "";
    }
  }

  onEnterFonctionnelle(value: string, nb: number) {
    if (value != "") {
      this.poste.fonctionnelles.push(new Savoir(value, nb));
      this.inputFonctionnelle = "";
    }
  }

  onEnterTechnique(value: string, nb: number) {
    if (value != "") {
      this.poste.techniques.push(new Savoir(value, nb));
      this.inputTechnique = "";
    }
  }

  onEnterLinguistiques(value: string, nb: number) {
    if (value != "") {
      this.poste.langues.push(new Savoir(value, nb));
      this.inputLinguistiques = "";
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




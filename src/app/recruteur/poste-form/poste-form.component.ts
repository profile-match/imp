import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Poste}    from '../interfaces/poste';
import {Savoir} from "../interfaces/savoir";
import {createService} from "../services/createService";
import {AutocompletionService} from "../services/autocompletion.service";

@Component({
  selector: 'app-poste-form',
  templateUrl: './poste-form.component.html',
  styleUrls: ['./poste-form.component.css'],
  providers: [createService, AutocompletionService]
})
export class PosteFormComponent implements OnInit {

 // private _class: string;
  private _query: string;
  private _result: string;
  private _isChecked: boolean;
  private _poste = <Poste>{};
  private _inputSavoirSpe: string;
  private _inputSavoirEtre: string;
  private _inputSavoirFaire: string;
  private _inputMetier: string;
  private _inputFonctionnelle: string;
  private _inputTechnique: string;
  private _inputLinguistiques: string;
  private _inputFormation: string;
  private _inputCertification: string;

  //
  selectedValue = null;
  private _cancel$: EventEmitter<any>;
  private _submit$: EventEmitter<any>;

  private _enModification: boolean;

  //arrays SAvoirs
  private _metiers: Savoir[];


  constructor(private _createService: createService, private _AutocompletionService: AutocompletionService) {

    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();

    this._poste.reference = "ref";
    this._poste.intitule = "int";
    this._poste.indice_salaire = "ind";
    this._poste.salaire_min = 5;
    this._poste.salaire_max = 2;
    this._poste.afficher_moyenne = 0;
    this._poste.type_contrat = "tc";
    this._poste.resume = "res";
    this._poste.point_attention = "pa";
    this._poste.lieu_travail = "lieut";
    this._poste.organisation = "orga";
    this._poste.equipe_concernee = "equipe";
    this._poste.savoir_specifications = [];
    this._poste.savoir_faires = [];
    this._poste.savoir_etres = [];
    this._poste.metiers = [];
    this._poste.fonctionnelles = [];
    this._poste.techniques = [];
    this._poste.langues = [];
    this._poste.formations = [];
    this._poste.certifications = [];

    this._inputSavoirSpe = "";
    this._inputSavoirEtre = "";
    this._inputSavoirFaire = "";
    this._inputMetier = "";
    this._inputFonctionnelle = "";
    this._inputTechnique = "";
    this._inputLinguistiques = "";
    this._inputFormation = "";
    this._inputCertification = "";

    this._query = '';
    this._result = '';
    this._isChecked = false;
    this._enModification = false;
  }


  @Input() set modele(post: Poste) {
    this._poste = post;
  }

  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  @Output('submit') get submit$(): EventEmitter<any> {
    return this._submit$;
  }


  get enModification() : boolean{
    return this._enModification;
  }

  get poste() : Poste{
    return this._poste;
  }

  ngOnChanges(record) {
    if (record.modele && record.modele.currentValue) {
      this._poste = record.modele.currentValue;
      this._enModification = !!this._poste;
    }
  }

  cancel() {
    this._cancel$.emit();
  }

  submit() {
    if(this._enModification)
      this._submit$.emit(this._poste);
    else {
      this._createService.create(this._poste).subscribe();
    }

  }

  completeMetier(value: string, nb: number) {
    this._AutocompletionService.searchMetier(value).subscribe(
      savoir => {this._metiers = savoir;

      });
  }

  deleteSpe(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.savoir_specifications) {
      ind++;
      if (i == savoir) {
        this._poste.savoir_specifications.splice(ind - 1, 1);
      }
    }
  }

  deleteEtre(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.savoir_etres) {
      ind++;
      if (i == savoir) {
        this._poste.savoir_etres.splice(ind - 1, 1);
      }
    }
  }

  deleteFaire(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.savoir_faires) {
      ind++;
      if (i == savoir) {
        this._poste.savoir_faires.splice(ind - 1, 1);
      }
    }
  }

  deleteMetier(metier: any) {
    let ind: any = 0;
    for (let i of this._poste.metiers) {
      ind++;
      if (i == metier) {
        this._poste.metiers.splice(ind - 1, 1);
      }
    }
  }

  deleteFonctionnelle(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.fonctionnelles) {
      ind++;
      if (i == savoir) {
        this._poste.fonctionnelles.splice(ind - 1, 1);
      }
    }
  }

  deleteTechnique(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.techniques) {
      ind++;
      if (i == savoir) {
        this._poste.techniques.splice(ind - 1, 1);
      }
    }
  }

  deleteLinguistiques(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.langues) {
      ind++;
      if (i == savoir) {
        this._poste.langues.splice(ind - 1, 1);
      }
    }
  }

  deleteFormation(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.formations) {
      ind++;
      if (i == savoir) {
        this._poste.formations.splice(ind-1, 1);
      }
    }
  }

  deleteCertification(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.certifications) {
      ind++;
      if (i == savoir) {
        this._poste.certifications.splice(ind-1, 1);
      }
    }
  }

  /**
   * Returns private property this._poste.savoirSpe
   *
   * @returns {any[]}
   */
  get savoirAddSpe(): Savoir[] {
    return this._poste.savoir_specifications;
  }

  /**
   * Returns private property _savoirAddEtre
   *
   * @returns {any[]}
   */
  get savoirAddEtre(): Savoir[] {
    return this._poste.savoir_etres;
  }

  /**
   * Returns private property _savoirAddFaire
   *
   * @returns {any[]}
   */
  get savoirAddFaire(): Savoir[] {
    return this._poste.savoir_faires;
  }

  /**
   * Returns private property _metierAdd
   *
   * @returns {any[]}
   */
  get metierAdd(): Savoir[] {
    return this._poste.metiers;
  }

  get fonctionnelleAdd(): Savoir[] {
    return this._poste.fonctionnelles;
  }

  get cMetier(): Savoir[] {
    return this._metiers;
  }

  get techniqueAdd(): Savoir[] {
    return this._poste.techniques;
  }

  get linguistiquesAdd(): Savoir[] {
    return this._poste.langues;
  }

  get formationAdd(): Savoir[] {
    return this._poste.formations;
  }

  get certificationAdd(): Savoir[] {
    return this._poste.certifications;
  }

  onEnterSpe(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };

      this._poste.savoir_specifications.push(savoirs);
      this._inputSavoirSpe = "";
    }
  }

  onEnterFaire(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value
      };

      this._poste.savoir_faires.push(savoirs);
      this._inputSavoirFaire = "";
    }
  }

  onEnterEtre(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };

      this._poste.savoir_etres.push(savoirs);
      this._inputSavoirEtre = "";

    }
  }

  onEnterMetier(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };
      this._poste.metiers.push(savoirs);
      this._inputMetier = "";
    }
  }

  onEnterFonctionnelle(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };
      this._poste.fonctionnelles.push(savoirs);
      this._inputFonctionnelle = "";
    }
  }

  onEnterTechnique(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };

      this._poste.techniques.push(savoirs);
      this._inputTechnique = "";
    }
  }

  onEnterLinguistiques(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };

      this._poste.langues.push(savoirs);
      this._inputLinguistiques = "";
    }
  }

  onEnterFormation(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };

      this._poste.formations.push(savoirs);
      this._inputFormation = "";
    }
  }

  onEnterCertification(value: string, nb: number) {
    if (value != "") {
      var savoirs:Savoir;
      savoirs ={
        obligatoire: nb,
        intitule: value

      };
      this._poste.certifications.push(savoirs);
      this._inputCertification = "";
    }
  }

  getClass() {
    if (this._poste.afficher_moyenne == 0) {
      this._isChecked = true;
      this._poste.afficher_moyenne = 1;
    } else {
      this._isChecked = false;
      this._poste.afficher_moyenne = 0;
    }
  }

  // get class() : string{
  //   return this._class;
  // }

  get query() : string{
    return this._query;
  }

  get result() : string{
    return this._result ;
  }
  get isChecked() : boolean{
    return this._isChecked;
  }

  get inputSavoirSpe(): string{
    return this._inputSavoirSpe;
  }
  get inputSavoirEtre(): string{
    return this._inputSavoirEtre;
  }
  get inputSavoirFaire(): string{
    return this._inputSavoirFaire;
  }
  get inputMetier(): string{
    return this._inputMetier;
  }
  get inputFonctionnelle(): string{
    return this._inputFonctionnelle;
  }
  get inputTechnique(): string{
    return this._inputTechnique;
  }
  get inputLinguistiques(): string{
    return this._inputLinguistiques;
  }
  get inputFormation(): string{
    return this._inputFormation;
  }

  get inputCertification(): string{
    return this._inputCertification;
  }

  ngOnInit() {

  }

}




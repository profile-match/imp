import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Poste}    from '../interfaces/poste';
import {Savoir} from "../interfaces/savoir";
import {createService} from "../services/createService";
import {AutocompletionService} from "../services/autocompletion.service";
import {Location} from '@angular/common';

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

  //arrays Savoirs pour récupérer les auto complete
  private _metiers: Savoir[];
  private _fonctionnelles: Savoir[];


  private _langues: Savoir[];
  private _formations: Savoir[];
  private _certifications: Savoir[];
  private _techniques: Savoir[];

  private _detailHidden: any;
  private _detailDisabled: any;


  constructor(private _location: Location,private _createService: createService, private _AutocompletionService: AutocompletionService) {

    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();


    this._poste.reference = "";
    this._poste.intitule = "";
    this._poste.indice_salaire = "";
    this._poste.salaire_min;
    this._poste.salaire_max;
    this._poste.afficher_moyenne;
    this._poste.type_contrat = "";
    this._poste.resume = "";
    this._poste.point_attention = "";
    this._poste.lieu_travail = "";
    this._poste.organisation = "";
    this._poste.equipe_concernee = "";
    this._poste.savoir_specifications = [];
    this._poste.savoir_faires = [];
    this._poste.savoir_etres = [];
    this._poste.metiers = [];
    this._poste.fonctionnelles = [];
    this._poste.techniques = [];
    this._poste.langues = [];
    this._poste.formations = [];
    this._poste.certifications = [];

    this._metiers = [];
    this._fonctionnelles = [];
    this._techniques = [];
    this._langues = [];
    this._formations = [];
    this._certifications = [];

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
    this._detailHidden= "visible";
    this._detailDisabled=false;
  }


  get detailHidden(): any {
    return this._detailHidden;
  }

  @Input() set detailHidden(value: any) {
    this._detailHidden = value;
  }

  get detailDisabled(): any {
    return this._detailDisabled;
  }

  @Input() set detailDisabled(value: any) {
    this._detailDisabled = value;
  }

  get metiers(): Savoir[] {
    return this._metiers;
  }

  set metiers(value: Savoir[]) {
    this._metiers = value;
  }

  get fonctionnelles(): Savoir[] {
    return this._fonctionnelles;
  }

  set fonctionnelles(value: Savoir[]) {
    this._fonctionnelles = value;
  }

  get langues(): Savoir[] {
    return this._langues;
  }

  set langues(value: Savoir[]) {
    this._langues = value;
  }

  get formations(): Savoir[] {
    return this._formations;
  }

  set formations(value: Savoir[]) {
    this._formations = value;
  }

  get certifications(): Savoir[] {
    return this._certifications;
  }

  set certifications(value: Savoir[]) {
    this._certifications = value;
  }

  get techniques(): Savoir[] {
    return this._techniques;
  }

  set techniques(value: Savoir[]) {
    this._techniques = value;
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


  get enModification(): boolean {
    return this._enModification;
  }

  get poste(): Poste {
    return this._poste;
  }

  ngOnChanges(record) {
    if (record.modele && record.modele.currentValue) {
      this._poste = record.modele.currentValue;
      this._enModification = !!this._poste;
    }
  }

  cancel() {
    this._location.back();
  }

  submit() {
    if (this._enModification)
      this._submit$.emit(this._poste);
    else {
      this._createService.create(this._poste).subscribe();
    }

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
        this._poste.formations.splice(ind - 1, 1);
      }
    }
  }

  deleteCertification(savoir: any) {
    let ind: any = 0;
    for (let i of this._poste.certifications) {
      ind++;
      if (i == savoir) {
        this._poste.certifications.splice(ind - 1, 1);
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
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value

      };

      this._poste.savoir_specifications.push(savoirs);
      this._inputSavoirSpe = "";
    }
  }

  onEnterFaire(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value
      };

      this._poste.savoir_faires.push(savoirs);
      this._inputSavoirFaire = "";
    }
  }

  onEnterEtre(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value

      };

      this._poste.savoir_etres.push(savoirs);
      this._inputSavoirEtre = "";

    }
  }

  onEnterMetier(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value

      };
      this._poste.metiers.push(savoirs);
      this._inputMetier = "";
    }
  }

  onEnterFonctionnelle(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value

      };
      this._poste.fonctionnelles.push(savoirs);
      this._inputFonctionnelle = "";
    }
  }

  onEnterTechnique(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value

      };

      this._poste.techniques.push(savoirs);
      this._inputTechnique = "";
    }
  }

  onEnterLinguistiques(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value

      };

      this._poste.langues.push(savoirs);
      this._inputLinguistiques = "";
    }
  }

  onEnterFormation(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
        obligatoire: nb,
        intitule: value

      };

      this._poste.formations.push(savoirs);
      this._inputFormation = "";
    }
  }

  onEnterCertification(value: string, nb: number) {
    if (value != "") {
      var savoirs: Savoir;
      savoirs = {
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

  get query(): string {
    return this._query;
  }

  get result(): string {
    return this._result;
  }

  get isChecked(): boolean {
    return this._isChecked;
  }

  get inputSavoirSpe(): string {
    return this._inputSavoirSpe;
  }

  get inputSavoirEtre(): string {
    return this._inputSavoirEtre;
  }

  get inputSavoirFaire(): string {
    return this._inputSavoirFaire;
  }

  get inputMetier(): string {
    return this._inputMetier;
  }

  get inputFonctionnelle(): string {
    return this._inputFonctionnelle;
  }

  get inputTechnique(): string {
    return this._inputTechnique;
  }

  get inputLinguistiques(): string {
    return this._inputLinguistiques;
  }

  get inputFormation(): string {
    return this._inputFormation;
  }

  get inputCertification(): string {
    return this._inputCertification;
  }

  autoComplete(value: string, funct: string) {
    if (value) {
      if (funct == "metier") {
        this._AutocompletionService.searchMetier(value).subscribe(savoirMet => this._metiers = savoirMet);
      } else if (funct == "fonctionnelle") {
        this._AutocompletionService.searchFonctionnelle(value).subscribe(savoirFonc => this._fonctionnelles = savoirFonc);
      } else if (funct == "technique") {
        this._AutocompletionService.searchTechnique(value).subscribe(savoirTech => this._techniques = savoirTech);
      } else if (funct == "linguistique") {
        this._AutocompletionService.searchLinguistique(value).subscribe(savoirLin => this._langues = savoirLin);
      } else if (funct == "formation") {
        this._AutocompletionService.searchFormation(value).subscribe(savoirForm => this._formations = savoirForm);
      } else if (funct == "certification") {
        this._AutocompletionService.searchCertification(value).subscribe(savoirCert => this._certifications = savoirCert);
      }
    }
  }


  ngOnInit() {

  }

}




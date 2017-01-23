import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recruteur} from "../../../recruteur/interfaces/recruteur";
import {Poste} from "../../../recruteur/interfaces/poste";
import {RecruteurService} from "../../../shared/service/recruteur.service";

@Component({
  selector: 'app-recruteur-detail',
  providers: [RecruteurService],
  templateUrl: './recruteur-detail.component.html',
  styleUrls: ['./recruteur-detail.component.css']
})
export class RecruteurDetailComponent implements OnInit {

  private _recruteur: Recruteur;
  private _postes: Poste[];
  private _bannir$: EventEmitter<any>;
  private _selectedPost: Poste;

  constructor(private recruteurService: RecruteurService) {
    this._bannir$ = new EventEmitter();
    this._postes = [];
    this._selectedPost = {id: 1, id_recruteur: 1, date_publication: 12, reference:"ref", intitule:"int", indice_salaire: "ind", salaire_min:5, salaire_max:2, afficher_moyenne: 0, type_contrat: "tc", resume: "res", point_attention: "pa", lieu_travail: "lieut", organisation: "orga", equipe_concernee: "equipe", savoir_specifications:[], savoir_faires: [], savoir_etres:[], metiers:[], fonctionnelles: [], techniques: [], langues: [], formations: [], certifications: []};
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    //  console.log(JSON.stringify(this._comments));
   // alert(this._recruteur.id);
    this.recruteurService.getPost(1).subscribe(posts => this._postes = posts);
  }

  get recruteur(): Recruteur {
    return this._recruteur;
  }

  @Input() set recruteur(value: Recruteur) {
    this._recruteur = value;
  }

  @Output('bannirRecruteur') get bannir$(): EventEmitter<any> {
    return this._bannir$;
  }

  set bannir$(value: EventEmitter<any>) {
    this._bannir$ = value;
  }

  public bannir(recruteur: Recruteur){
    this._bannir$.emit(recruteur);
  }

  public supprimerPost(post: Poste){
    alert("fonctionnalité 'supprimer com' non defini");
  }

  public editerPost(post: Poste){
    alert("fonctionnalité 'editer post' pour : '"+post.intitule +"' non defini");
  }

  public signaler(){
    alert("fonctionnalité 'Signaler' non defini");
  }

  get postes(): Poste[] {
    return this._postes;
  }

  set postes(value: Poste[]) {
    this._postes = value;
  }

  public onSubmit(){
    this.editerPost(this._selectedPost);
  }

  public selectedPost(post){
    this._selectedPost = post;
  }

}

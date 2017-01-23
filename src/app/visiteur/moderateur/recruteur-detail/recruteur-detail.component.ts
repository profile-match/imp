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
    this._recruteur = {id: 0,idEntreprise: 0, email: "null", banned: 0, nom: "null", photo : "null", prenom: "null"};
    this._selectedPost = {id_recruteur: 0, date_publication: 0, reference: "#0", intitule: "null", indice_salaire: "0", salaire_min: 0, salaire_max: 0, type_contrat: "null", resume: "null", point_attention: "null", lieu_travail: "null", afficher_moyenne: 0, organisation: "null", equipe_concernee: "null", id: 0};//, signale: false};
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

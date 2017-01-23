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

    this._selectedPost.id_recruteur = 1;
    this._selectedPost.reference = "ref";
    this._selectedPost.intitule = "int";
    this._selectedPost.indice_salaire = "ind";
    this._selectedPost.salaire_min = 5;
    this._selectedPost.salaire_max = 2;
    this._selectedPost.afficher_moyenne = 0;
    this._selectedPost.type_contrat = "tc";
    this._selectedPost.resume = "res";
    this._selectedPost.point_attention = "pa";
    this._selectedPost.lieu_travail = "lieut";
    this._selectedPost.organisation = "orga";
    this._selectedPost.equipe_concernee = "equipe";
    this._selectedPost.savoir_specifications = [];
    this._selectedPost.savoir_faires = [];
    this._selectedPost.savoir_etres = [];
    this._selectedPost.metiers = [];
    this._selectedPost.fonctionnelles = [];
    this._selectedPost.techniques = [];
    this._selectedPost.langues = [];
    this._selectedPost.formations = [];
    this._selectedPost.certifications = [];

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

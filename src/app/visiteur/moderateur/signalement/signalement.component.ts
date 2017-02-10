import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CandidatService} from "../../../shared/service/candidat.service";
import {Poste} from "../../../recruteur/interfaces/poste";
import {RecruteurService} from "../../../shared/service/recruteur.service";
import {Commentaire} from "../../../Candidat/interfaces/commentaire";

@Component({
  selector: 'app-signalement',
  providers: [CandidatService, RecruteurService],
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.css']
})
export class SignalementComponent implements OnInit {

  private _comments: Commentaire[];
  private _postes: Poste[];
  private _goToDetail$: EventEmitter<any>;
  private _goToDetailRecruteur$: EventEmitter<any>;

  constructor(private recruteurService: RecruteurService, private candidatService: CandidatService) {
    this._comments = [];
    this._postes = [];
    this._goToDetail$ = new EventEmitter();
    this._goToDetailRecruteur$ = new EventEmitter();
  }

  ngOnInit() {
  /*  this.getComments();
    this.getPosts();*/
  }

  get comments(): Commentaire[] {
    return this._comments;
  }
  set comments(value: Commentaire[]) {
    this._comments = value;
  }

  getComments(): void {
  //  console.log(JSON.stringify(this._comments));
    this.candidatService.getComments().then(comments => this._comments = comments);
  }

  goToDetail(idCandidat:number){
    this._goToDetail$.emit(idCandidat);
  }

  @Output('goToDetail') get goToDetail$(): EventEmitter<any> {
    return this._goToDetail$;
  }

  set goToDetail$(value: EventEmitter<any>) {
    this._goToDetail$ = value;
  }

  goToDetailRecruteur(idRecruteur:number){
    this._goToDetailRecruteur$.emit(idRecruteur);
  }

  @Output('goToDetailRecruteur') get goToDetailRecruteur$(): EventEmitter<any> {
    return this._goToDetailRecruteur$;
  }

  set goToDetailRecruteur$(value: EventEmitter<any>) {
    this._goToDetailRecruteur$ = value;
  }

  getPosts(): void {
    //  console.log(JSON.stringify(this._comments));
    this.recruteurService.getPosts().then(posts => this._postes = posts);
  }

  get postes(): Poste[] {
    return this._postes;
  }

  set postes(value: Poste[]) {
    this._postes = value;
  }

  public supprimerCom(comment: Comment){
    alert("fonctionnalité 'supprimer com' non defini");
  }

  public editerCom(comment: Comment){
    alert("fonctionnalité 'editer com' non defini");
  }

  public supprimerPost(post: Poste){
    alert("fonctionnalité 'supprimer post' non defini");
  }

  public editerPost(comment: Poste){
    alert("fonctionnalité 'editer post' non defini");
  }
}

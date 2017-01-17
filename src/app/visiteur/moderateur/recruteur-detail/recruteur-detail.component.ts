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

  constructor(private recruteurService: RecruteurService) {
    this._bannir$ = new EventEmitter();
    this._postes = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    //  console.log(JSON.stringify(this._comments));
    this.recruteurService.getPosts().then(posts => this._postes = posts);
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
    alert("fonctionnalité 'editer com' non defini");
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


}

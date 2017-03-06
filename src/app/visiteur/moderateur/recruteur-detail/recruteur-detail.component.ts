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
  private _unban$: EventEmitter<any>;
  private _selectedPost: Poste;

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'nombre d\'offre posté'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'nombre d\'avis posté'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'nombre de commentaire signalé'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  // Pie
  public pieChartLabels:string[] = ['unsafe', 'safe'];
  public pieChartData:number[] = [300, 500];
  public pieChartColors:any[] = [{backgroundColor:["#EE0000", "#66E21A"]}];
  public pieChartType:string = 'pie';
  public pieChartOption:any = { size: {
    height: 200,
    width: 200
  },
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: false,
    tooltipTemplate: '<%= value %> $',
    responsive: true
  };
  public pieChartColours:any[] = [{ backgroundColor: 'rgb(255, 30, 30)',
    hoverBackgroundColor: 'rgb(255, 30, 30)',
    borderColor: 'rgb(30, 218, 0)',
    hoverBorderColor: 'rgb(30, 218, 0)'
  }];

  constructor(private recruteurService: RecruteurService) {
    this._bannir$ = new EventEmitter();
    this._unban$ = new EventEmitter();
   // this._recruteur = {id: 1,idEntreprise: 1, email: "string", banned: 0, nom: "string", photo : "null", prenom: "string"}
    this._postes = [];
    this._selectedPost = {id: 1, id_recruteur: 1, date_publication: 12, reference:"ref", intitule:"int", indice_salaire: "ind", salaire_min:5, salaire_max:2, afficher_moyenne: 0, type_contrat: "tc", resume: "res", point_attention: "pa", lieu_travail: "lieut", organisation: "orga", equipe_concernee: "equipe", savoir_specifications:[], savoir_faires: [], savoir_etres:[], metiers:[], fonctionnelles: [], techniques: [], langues: [], formations: [], certifications: [], listeCandidat: []};
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    //  console.log(JSON.stringify(this._comments));
   // console.log(this._recruteur.id);
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

  @Output('unBanRecruteur') get unban$(): EventEmitter<any> {
    return this._unban$;
  }

  public unBan(recruteur: Recruteur){
    this._unban$.emit(recruteur);
  }

  set unban$(value: EventEmitter<any>) {
    this._unban$ = value;
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

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

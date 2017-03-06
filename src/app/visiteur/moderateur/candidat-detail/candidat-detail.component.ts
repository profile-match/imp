import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CandidatService} from "../../../shared/service/candidat.service";
import {candidat} from "../../../Candidat/interfaces/candidat";
import {Commentaire} from "../../../Candidat/interfaces/commentaire";


@Component({
  selector: 'app-candidat-detail',
  providers: [CandidatService],
  templateUrl: './candidat-detail.component.html',
  styleUrls: ['./candidat-detail.component.css']
})
export class CandidatDetailComponent implements OnInit {

   private _candidat: candidat;
   private _comments: Commentaire[];
   private _selectedComment: Commentaire;
  private _bannir$: EventEmitter<any>;
  private _unban$: EventEmitter<any>;


  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'nombre de Commentaire posté'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'nombre de d\'offre postulé'},
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

  constructor(private candidatService: CandidatService) {
    this._bannir$ = new EventEmitter();
    this._unban$ = new EventEmitter();
    this._comments = [];
  //  this._candidat = {id: 11, email: 'nice', isBanned:0, loisirs: 'ni', nom: "test", photo:"", prenom: 'Mr. Nice', experiencePro: 'd', formation:'d', competence:[]};
    this._selectedComment = {id: 1, idCandidat: 11, contenu: 'null', signale: true};
  }

  ngOnInit() {
  //  this.getComments();
  }

  get comments(): Commentaire[] {
    return this._comments;
  }
  set comments(value: Commentaire[]) {
    this._comments = value;
  }

  getComments(): void {
    this.candidatService.getComments().then(comments => this._comments = comments);
  }

  get candidat(): candidat {
    return this._candidat;
  }

  @Input() set candidat(value: candidat) {
    this._candidat = value;
  }

  @Output('personBannir') get bannir$(): EventEmitter<any> {
    return this._bannir$;
  }

  set bannir$(value: EventEmitter<any>) {
    this._bannir$ = value;
  }

  public bannir(candidat: candidat){
    this._bannir$.emit(candidat);
  }

  public unBan(candidat: candidat){
    this._unban$.emit(candidat);
  }

  @Output('unBanPerson') get unban$(): EventEmitter<any> {
    return this._unban$;
  }

  set unban$(value: EventEmitter<any>) {
    this._unban$ = value;
  }

  public supprimerCom(comment: Commentaire){
    alert("fonctionnalité 'supprimer com' non defini");
  }

  public selectedComment(comment){
    this._selectedComment = comment;
  }

  public editerCom(comment: Commentaire){
    alert("fonctionnalité 'editer com' pour le com : '"+comment.contenu +"' non defini");
  }

  public onSubmit(){
    this.editerCom(this._selectedComment);
  //  console.log(this._selectedComment.contenu);
  }

  public signaler(){
    alert("fonctionnalité 'Signaler' non defini");
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}

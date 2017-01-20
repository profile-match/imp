import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Candidat} from "../../../candidat/interfaces/candidat";
import {Comment} from "../../../candidat/interfaces/commentaire";
import {CandidatService} from "../../../shared/service/candidat.service";


@Component({
  selector: 'app-candidat-detail',
  providers: [CandidatService],
  templateUrl: './candidat-detail.component.html',
  styleUrls: ['./candidat-detail.component.css']
})
export class CandidatDetailComponent implements OnInit {

   private _candidat: Candidat;
   private _comments: Comment[];
   private _selectedComment: Comment;
  private _bannir$: EventEmitter<any>;
  private _unban$: EventEmitter<any>;

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';


  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'nb Comm posté'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'nb offre postulé'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'nb comm signalé'}
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
  public pieChartLabels:string[] = ['uncredible', 'credible'];
  public pieChartData:number[] = [300, 500];
  public pieChartColors:any[] = [{backgroundColor:["#FF0000", "#00FF00"]}];
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

  get comments(): Comment[] {
    return this._comments;
  }
  set comments(value: Comment[]) {
    this._comments = value;
  }

  getComments(): void {
    this.candidatService.getComments().then(comments => this._comments = comments);
  }

  get candidat(): Candidat {
    return this._candidat;
  }

  @Input() set candidat(value: Candidat) {
    this._candidat = value;
  }

  @Output('personBannir') get bannir$(): EventEmitter<any> {
    return this._bannir$;
  }

  set bannir$(value: EventEmitter<any>) {
    this._bannir$ = value;
  }

  public bannir(candidat: Candidat){
    this._bannir$.emit(candidat);
  }

  public unBan(candidat: Candidat){
    this._unban$.emit(candidat);
  }

  @Output('unBanPerson') get unban$(): EventEmitter<any> {
    return this._unban$;
  }

  set unban$(value: EventEmitter<any>) {
    this._unban$ = value;
  }

  public supprimerCom(comment: Comment){
    alert("fonctionnalité 'supprimer com' non defini");
  }

  public selectedComment(comment){
    this._selectedComment = comment;
  }

  public editerCom(comment: Comment){
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

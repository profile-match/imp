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
  private _bannir$: EventEmitter<any>;
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor(private candidatService: CandidatService) {
    this._bannir$ = new EventEmitter();
    this._comments = [];
  }

  ngOnInit() {
    this.getComments();
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

  public supprimerCom(comment: Comment){
    alert("fonctionnalité 'supprimer com' non defini");
  }

  public editerCom(comment: Comment){
    alert("fonctionnalité 'editer com' non defini");
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

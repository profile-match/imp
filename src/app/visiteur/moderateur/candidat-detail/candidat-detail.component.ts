import {Component, OnInit, Input} from '@angular/core';
import {Candidat} from "../../../candidat/interfaces/candidat";

@Component({
  selector: 'app-candidat-detail',
  templateUrl: './candidat-detail.component.html',
  styleUrls: ['./candidat-detail.component.css']
})
export class CandidatDetailComponent implements OnInit {

   private _candidat: Candidat;
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  get candidat(): Candidat {
    return this._candidat;
  }

  @Input() set candidat(value: Candidat) {
    this._candidat = value;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

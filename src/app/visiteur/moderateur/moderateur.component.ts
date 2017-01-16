import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/service/authentication.service'
import { CandidatService } from '../../shared/service/candidat.service';
import { Candidat } from '../../candidat/interfaces/candidat';

@Component({
  selector: 'app-moderateur',
  providers: [AuthenticationService, CandidatService],
  templateUrl: './moderateur.component.html',
  styleUrls: ['./moderateur.component.css']
})
export class ModerateurComponent implements OnInit {

  candidats: Candidat[];
  selectedCandidat: Candidat;
  signalement: boolean = false;
  rechercher: boolean = false;

  constructor(private _service:AuthenticationService,
              private candidatService: CandidatService) {
    this.candidats = [];
  }

  ngOnInit() {
    this.getCandidats();
    this._service.checkCredentialModerator();
  }


  logout() {
    this._service.logout();
  }

  getCandidats(): void {
    console.log(JSON.stringify(this.candidats));
    this.candidatService.getCandidats().then(candidats => this.candidats = candidats);
    console.log(JSON.stringify(this.candidats));
   // console.log(JSON.stringify(this.candidats.length));
  }

  getSelectedCandidats(): Candidat {
    return this.selectedCandidat;
  }

  onSelect(candidat: Candidat): void {
    this.signalement = false;
    this.rechercher = false;
    this.selectedCandidat = candidat;
  }

  setSignal(): void {
    this.selectedCandidat = null;
    this.rechercher = false;
    this.signalement = true;
  }

  recherche(): void {
    this.selectedCandidat = null;
    this.rechercher = true;
    this.signalement = false;
  }

  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}

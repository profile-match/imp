import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/service/authentication.service'
import { CandidatService } from '../../shared/service/candidat.service';
import { Candidat } from '../../candidat/interfaces/candidat';
import {RecruteurService} from "../../shared/service/recruteur.service";
import {Recruteur} from "../../recruteur/interfaces/recruteur";

@Component({
  selector: 'app-moderateur',
  providers: [AuthenticationService, CandidatService, RecruteurService],
  templateUrl: './moderateur.component.html',
  styleUrls: ['./moderateur.component.css']
})
export class ModerateurComponent implements OnInit {

  candidats: Candidat[];
  recruteurs: Recruteur[];
  selectedCandidat: Candidat;
  selectedRecruteur: Recruteur;
  signalement: boolean = false;
  rechercher: boolean = false;

  constructor(private _service:AuthenticationService,
              private candidatService: CandidatService, private recruteurService: RecruteurService) {
    this.candidats = [];
    this.recruteurs = [];
  }

  ngOnInit() {
    this.getCandidats();
    this._service.checkCredentialModerator();
    this.getRecruteurs();
  }


  logout() {
    this._service.logout();
  }

  getRecruteurs(): void {
    this.recruteurService.getRecruteurs().then(recruteurs => this.recruteurs = recruteurs);
  }


  getCandidats(): void {
    this.candidatService.getCandidats().then(candidats => this.candidats = candidats);
  //  console.log(JSON.stringify(this.candidats));
  }

  getSelectedCandidats(): Candidat {
    return this.selectedCandidat;
  }

  onSelectCandidat(candidat: Candidat): void {
    this.signalement = false;
    this.rechercher = false;
    this.selectedRecruteur = null;
    this.selectedCandidat = candidat;
  }

  onSelectRecruteur(recruteur: Recruteur): void {
    this.signalement = false;
    this.rechercher = false;
    this.selectedCandidat = null;
    this.selectedRecruteur = recruteur;
  }

  setSignal(): void {
    this.selectedRecruteur = null;
    this.selectedCandidat = null;
    this.rechercher = false;
    this.signalement = true;
  }

  recherche(): void {
    this.selectedRecruteur = null;
    this.selectedCandidat = null;
    this.rechercher = true;
    this.signalement = false;
  }

  /**
   * Function to ban a person
   *
   * @param person
   */
  bannir(candidat: Candidat) {
    alert("fonctionnalité 'banir candidat "+candidat.id +" ' non defini");
   // this.candidatService.bannir(candidat).then(candidats => this.candidats = candidats);
  }

  bannirRecruteur(recruteur: Recruteur) {
    alert("fonctionnalité 'banir recruteur "+recruteur.name +" ' non defini");
  }

  goToDetailCandidat(idCandidat: number){
    this.signalement = false;
    this.rechercher = false;
    this.candidatService.getCandidat(idCandidat).then(candidat => this.selectedCandidat = candidat);
  }

  goToDetailRecruteur(idRecruteur: number){
    this.signalement = false;
    this.rechercher = false;
    this.recruteurService.getRecruteur(idRecruteur).then(recruteur => this.selectedRecruteur = recruteur);
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

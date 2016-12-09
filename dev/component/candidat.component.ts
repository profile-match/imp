import {Component} from 'angular2/core'
import {Http,Headers} from 'angular2/http';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'creer-candidat',
  templateUrl: 'dev/template/CreerProfileCandidat.html'
})
export class CandidatComponent {
  public intitule_de_poste:String;
  public date_debut:Date;
  public date_fin:Date;
  public pays:String;
  public ville:String;
  public nom_entreprise:String;
  public description_entreprise:String;
  public missions_effectuees:String;
  public intitule_de_formation:String;
  public etablissement:String;
  public description_formation:String;
  public date_debut_format:Date;
  public date_fin_format:Date;
  public domaine_de_competence:String;
  public competences:String;
  public loisirs:String;

  public http: Http;
  constructor(http: Http){
    this.http = http;
  }

  public addProfile(){

    var header= new Headers({
      'Content-Type': 'application/json'
    });

    var dataJson={
      "intitule_de_poste":this.intitule_de_poste,
      "date_debut":this.date_debut,
      "date_fin":this.date_fin,
      "pays":this.pays,
      "ville":this.ville,
      "nom_entreprise":this.nom_entreprise,
      "description_entreprise":this.description_entreprise,
      "missions_effectuees":this.missions_effectuees,
      "intitule_de_formation":this.intitule_de_formation,
      "etablissement":this.etablissement,
      "description_formation":this.description_formation,
      "date_debut_format":this.date_debut_format,
      "date_fin_format":this.date_fin_format,
      "domaine_de_competence":this.domaine_de_competence,
      "competences":this.competences,
      "loisirs":this.loisirs

    };
    alert(JSON.stringify(dataJson));
/*
    var json=JSON.stringify(dataJson);
    this.http.post('http://localhost:8080/BackendIMP/webresources/utilisateur/add',json,{
      headers:header
    }).map(res=> res.text()).subscribe(
      data =>  alert(data)
    );*/
  }
}

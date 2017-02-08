import {Candidat} from  '../candidats/candidat';
export class Offre {
  id: number;
  poste: string = '';
  experience: string = '';
  contrat: string = '';
  lieu: string = '';
  contact: string = '';
  disponibilite: string = '';
  discription: string = '';
  info: string = '';
  candidats: Candidat[] = [];

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}

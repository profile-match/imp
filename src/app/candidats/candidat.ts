export class Candidat {
  id: number;
  photo: any = '';
  nom: string = '';
  prenom: string = '';
  lien: string = '';
  contact: string = '';

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}

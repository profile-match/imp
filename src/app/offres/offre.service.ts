import { Injectable } from '@angular/core';
import {Offre} from './offre';

@Injectable()
export class OffreService {

  lastId: number = 5;
  offreList: Offre[]=[];

  

  constructor() { }

  //Simulate POST /offres
  addOffre(offre: Offre): OffreService {
    if(!offre.id){
      offre.id = ++this.lastId;
    }
    this.offreList.push(offre);
    return this;
  }

  //Simulate DELETE /offres/:id
  deleteOffreById(id: number): OffreService {
    this.offreList = this.offreList.filter(offre => offre.id !== id);
    return this;
  }

  //Simulate PUT /offres/: id
  updateOffreById(id: number, values: Object = {}): Offre {
    let offre = this.getOffreById(id);
    if(!offre) {
      return null;
    }
    Object.assign(this, values);
    return offre;
  }

  //Simulate GET /offreList
  getAllOffres(): Offre[] {
    return this.offreList;
  }

  //Simulate Get /offre/:id
  getOffreById(id: number): Offre {
    return this.offreList.filter(offre => offre.id === id).pop();
  }

}

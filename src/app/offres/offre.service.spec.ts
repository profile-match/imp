/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {Offre} from './offre';
import { OffreService } from './offre.service';

//Test the services, delete, add, get,...
describe('OffreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffreService]
    });
  });

  it('invoke the services', inject([OffreService], (service: OffreService) => {
    expect(service).toBeTruthy();
  }));

  // Test the getAllOffres service
  describe('getAllOffres()', () => {
  	//Empty list case
  	it('should return an empty array by default', inject([OffreService], (service: OffreService) => {
      expect(service.getAllOffres()).toEqual([]);
    }));

  	//Not empty list case 
    it('should return all offres', inject([OffreService], (service: OffreService) => {
      let offre1 = new Offre({poste: 'Ingénieur JEE', experience: '5 ans', lieu: 'Marseille', contact: '...@gmail.com', disponibilite: '12/12/2016', discription: '...', info: '...'});
      let offre2 = new Offre({poste: 'Ingénieur PHP', experience: '2 ans', lieu: 'Lille', contact: '...@gmail.com', disponibilite: '12/01/2017', discription: '...', info: '...'});
      service.addOffre(offre1);
      service.addOffre(offre2);
      expect(service.getAllOffres()).toEqual([offre1, offre2]);
    }));
  });

  //Test the addOffre service
  describe('addOffre(todo)', () => {
    it('should automatically assign an incrementing id', inject([OffreService], (service: OffreService) => {
      let offre1 = new Offre({poste: 'Ingénieur JEE', experience: '5 ans', lieu: 'Marseille', contact: '...@gmail.com', disponibilite: '12/12/2016', discription: '...', info: '...'});
      let offre2 = new Offre({poste: 'Ingénieur PHP', experience: '2 ans', lieu: 'Lille', contact: '...@gmail.com', disponibilite: '12/01/2017', discription: '...', info: '...'});
      service.addOffre(offre1);
      service.addOffre(offre2);
      expect(service.getOffreById(1)).toEqual(offre1);
      expect(service.getOffreById(2)).toEqual(offre2);
    }));
  });

  describe('deleteOffreById(id)', () => {
    it('should remove todo with the corresponding id', inject([OffreService], (service: OffreService) => {
      let offre1 = new Offre({poste: 'Ingénieur JEE', experience: '5 ans', lieu: 'Marseille', contact: '...@gmail.com', disponibilite: '12/12/2016', discription: '...', info: '...'});
      let offre2 = new Offre({poste: 'Ingénieur PHP', experience: '2 ans', lieu: 'Lille', contact: '...@gmail.com', disponibilite: '12/01/2017', discription: '...', info: '...'});
      service.addOffre(offre1);
      service.addOffre(offre2);
      expect(service.getAllOffres()).toEqual([offre1, offre2]);
      service.deleteOffreById(1);
      expect(service.getAllOffres()).toEqual([offre2]);
      service.deleteOffreById(2);
      expect(service.getAllOffres()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([OffreService], (service: OffreService) => {
      let offre1 = new Offre({poste: 'Ingénieur JEE', experience: '5 ans', lieu: 'Marseille', contact: '...@gmail.com', disponibilite: '12/12/2016', discription: '...', info: '...'});
      let offre2 = new Offre({poste: 'Ingénieur PHP', experience: '2 ans', lieu: 'Lille', contact: '...@gmail.com', disponibilite: '12/01/2017', discription: '...', info: '...'});
      service.addOffre(offre1);
      service.addOffre(offre2);
      expect(service.getAllOffres()).toEqual([offre1, offre2]);
      service.deleteOffreById(3);
      expect(service.getAllOffres()).toEqual([offre1, offre2]);
    }));
  });

  describe('updateOffreById(id, values)', () => {
    it('should return the offre with the corresponding id and updated data', inject([OffreService], (service: OffreService) => {
      let offre = new Offre({id: 45, poste: 'Ingénieur d\'étude et développemeent', experience: '5 ans', lieu: 'Marseille', contact: '...@gmail.com', disponibilite: '12/12/2016', discription: '...', info: '...'});
      service.addOffre(offre);
      let updatedOffre = service.updateOffreById(45, {poste: 'new poste'});
      expect(updatedOffre.poste).toEqual('new poste');
    }));

    it('should return null if the offre is not found', inject([OffreService], (service: OffreService) => {
      let offre = new Offre({poste: 'Ingénieur JEE', experience: '5 ans', lieu: 'Marseille', contact: '...@gmail.com', disponibilite: '12/12/2016', discription: '...', info: '...'});
      service.addOffre(offre);
      let updatedOffre = service.updateOffreById(1002, {poste: 'new poste'});
      expect(updatedOffre).toEqual(null);
    }));
  });





});

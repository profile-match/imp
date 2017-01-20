//Test of the offre constructor
//beforeEatch, beforeEacheProvders,
  //describe,xdescribe,
  //expect, it, xit,
import {
  
  async, inject
} from '@angular/core/testing';
import {Offre} from './offre';

describe('Offre', () => {

  it('should create an instance', () => {
    expect(new Offre()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let offre = new Offre({
      poste: 'Ingénieur JEE',
      experience: '5 ans',
      lieu: 'Marseille',
      contact: '...@gmail.com',
      disponibilite: '12/12/2016',
      discription: '...',
      info: '...'
    });
    expect(offre.poste).toEqual('Ingénieur JEE');
    expect(offre.experience).toEqual('5 ans');
  });

});

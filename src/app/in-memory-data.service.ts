import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let candidats = [
      {id: 11, name: 'Mr. Nice', email: 'nice', password: 'ni'},
      {id: 12, name: 'Narco', email: 'nice', password: 'ni'},
      {id: 13, name: 'Bombasto', email: 'nice', password: 'ni'},
      {id: 14, name: 'Celeritas', email: 'nice', password: 'ni'},
      {id: 15, name: 'Magneta', email: 'nice', password: 'ni'},
      {id: 16, name: 'RubberMan', email: 'nice', password: 'ni'},
      {id: 17, name: 'Dynama', email: 'nice', password: 'ni'},
      {id: 18, name: 'Dr IQ', email: 'nice', password: 'ni'},
      {id: 19, name: 'Magma', email: 'nice', password: 'ni'},
      {id: 20, name: 'Tornado', email: 'nice', password: 'ni'}
    ];
    return {candidats};
  }

}

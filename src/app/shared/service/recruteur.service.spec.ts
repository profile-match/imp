/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecruteurService } from './recruteur.service';

describe('RecruteurServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecruteurService]
    });
  });

  it('should ...', inject([RecruteurService], (service: RecruteurService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PosteService } from './poste.service';

describe('PosteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosteService]
    });
  });

  it('should ...', inject([PosteService], (service: PosteService) => {
    expect(service).toBeTruthy();
  }));
});

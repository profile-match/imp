/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffersService } from './offers.service';

describe('OffersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffersService]
    });
  });

  it('should ...', inject([OffersService], (service: OffersService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutocompletionService } from './autocompletion.service';

describe('AutocompletionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutocompletionService]
    });
  });

  it('should ...', inject([AutocompletionService], (service: AutocompletionService) => {
    expect(service).toBeTruthy();
  }));
});

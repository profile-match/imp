/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecruteurService } from './recruteur.service';
import {HttpModule, BaseRequestOptions, Http, XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('RecruteurServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecruteurService, MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([RecruteurService], (service: RecruteurService) => {
   // expect(service).toBeTruthy();
    service.getPost(1).subscribe(posts => {
      console.log("ref "+posts[0].reference);
      expect(posts[0].reference).toEqual("bn");
    })
  }));
});

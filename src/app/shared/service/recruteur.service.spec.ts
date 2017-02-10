/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { RecruteurService } from './recruteur.service';
import {HttpModule, BaseRequestOptions, Http, XHRBackend, Response, ResponseOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {Recruteur} from "../../recruteur/interfaces/recruteur";

describe('RecruteurServiceService', () => {
  let mockBackend: MockBackend;
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
    mockBackend = getTestBed().get(MockBackend);
  });

  it('should ...', inject([RecruteurService], (service: RecruteurService) => {
   // expect(service).toBeTruthy();
    service.getPost(1).subscribe(posts => {
      console.log("ref "+posts[0].reference);
      expect(posts[0].reference).toEqual("bn");
    })
  }));


  it('should get all recruteur', done => {
    //expect(service).toBeTruthy();
    let recruteurService: RecruteurService;

    getTestBed().compileComponents().catch(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    id: 26,
                    idEntreprise: 1,
                    email: "b@b.gmail.com",
                    banned: 0,
                    nom: "martin",
                    photo: "null",
                    prenom: "jean"
                  }]
              }
            )));
        });

      recruteurService = getTestBed().get(RecruteurService);
      expect(recruteurService).toBeDefined();

      recruteurService.getRecruteurs().subscribe((recruteurs: Recruteur[]) => {
        console.log("1er recruteur : "+recruteurs[0]);
   /*     expect(recruteurs.length).toBeDefined();
        expect(recruteurs.length).toEqual(1);
        expect(recruteurs[0].id).toEqual(26);
        expect(recruteurs[0].email).toEqual("b@b.gmail.com");
        expect(recruteurs[0].banned).toEqual(0);
        expect(recruteurs[0].nom).toEqual("martin");
        expect(recruteurs[0].photo).toEqual("null");*/
        done();
      });
    });
  });
});

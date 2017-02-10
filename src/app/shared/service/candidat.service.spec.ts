/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { CandidatService } from './candidat.service';


import { Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Candidat} from "../../candidat/interfaces/candidat";


describe('CandidatService', () => {
    let mockBackend: MockBackend;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        providers: [CandidatService, MockBackend,
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
    }));

    it('should get candidats', done => {
      //expect(service).toBeTruthy();
      let candidatService: CandidatService;

      getTestBed().compileComponents().then(() => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: [
                    {
                      id: 26,
                      email: "b@b.gmail.com",
                      banned: 0,
                      loisirs: "sport",
                      nom: "martin",
                      photo: "null",
                      prenom: "jean",
                      experiencePro: "exp",
                      formation: "form",
                      competence: null
                    }]
                }
              )));
          });

        candidatService = getTestBed().get(CandidatService);
        expect(candidatService).toBeDefined();

        candidatService.getCandidats().subscribe((candidats: Candidat[]) => {
          console.log("1er : "+candidats[0]);
          expect(candidats.length).toBeDefined();
          expect(candidats.length).toEqual(1);
          expect(candidats[0].id).toEqual(26);
          expect(candidats[0].email).toEqual("b@b.gmail.com");
          expect(candidats[0].banned).toEqual(0);
          expect(candidats[0].nom).toEqual("martin");
          expect(candidats[0].photo).toEqual("null");
          done();
        });
      });
    });

//teste pour recupérer qu'un seul candidat
    it('should fetch a single candidat entry by a key',
      async(inject([CandidatService], (candidatService) => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {

            // make sure the URL is correct
            expect(connection.request.url).toMatch(/\/server\/api\/blogs\/3/);
            connection.mockRespond(
              new Response(
                new ResponseOptions({
                  body: {
                    id: 3,
                    email: "b@b.gmail.com",
                    banned: 0,
                    loisirs: "sport",
                    nom: "martin",
                    photo: "null",
                    prenom: "jean",
                    experiencePro: "exp",
                    formation: "form",
                    competence: null
                  }

                }))
            );
          }
        );

        candidatService.getCandidat(3).subscribe(
          (cand) => {
            console.log("2eme : "+cand.id);
            expect(cand.id).toEqual(3);
            expect(cand.banned).toEqual(0);
          }
        );
      })));

//pour tester le banned d'un candidat (ne fonctionne pas)
    it('should save updates to an existing candidat entry', inject([CandidatService], (service: CandidatService) => {
      getTestBed().compileComponents().then(() => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {
            connection.mockRespond(new Response(
              new ResponseOptions({
                  body: [
                    {
                      id: 26,
                      email: "b@b.gmail.com",
                      banned: 0,
                      loisirs: "sport",
                      nom: "martin",
                      photo: "null",
                      prenom: "jean",
                      experiencePro: "exp",
                      formation: "form",
                      competence: null
                    }]
                }
              )));
          });

        let candidat: Candidat;
        candidat = {
          id: 3, email: "b@b.gmail.com", banned: 0, loisirs: "sport", nom: "martin", photo: "null", prenom: "jean",
          experiencePro: "exp", formation: "form", competence: null
        };
        console.log("candidat avant : " + candidat.id);

        service.bannir(candidat).subscribe(
          (successResult: Candidat) => {
            expect(successResult).toBeDefined();
            console.log(successResult);
         //   expect(successResult.id).toEqual(4);
          });

      });
    }));


});

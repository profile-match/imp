/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Offre} from './offre';

import { OffreComponent } from './offre.component';

describe('OffreComponent', () => {
  let component: OffreComponent;
  let fixture: ComponentFixture<OffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ OffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('should create offre compenent ', () => {
    let fixture = TestBed.createComponent(OffreComponent);
    let offreCompenent = fixture.debugElement.componentInstance;
    expect(offreCompenent).toBeTruthy();
  });

  it('should have a newOffre ', () => {
    let fixture = TestBed.createComponent(OffreComponent);
    let offreCompenent = fixture.debugElement.componentInstance;
    expect(offreCompenent.newOffre instanceof Offre).toBeTruthy();
  });

});

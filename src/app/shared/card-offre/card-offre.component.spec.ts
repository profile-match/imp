/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardOffreComponent } from './card-offre.component';

describe('CardOffreComponent', () => {
  let component: CardOffreComponent;
  let fixture: ComponentFixture<CardOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
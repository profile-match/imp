/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SavoirFaireComponent } from './savoir-faire.component';

describe('SavoirFaireComponent', () => {
  let component: SavoirFaireComponent;
  let fixture: ComponentFixture<SavoirFaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavoirFaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavoirFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

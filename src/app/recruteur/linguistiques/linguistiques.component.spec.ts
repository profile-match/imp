/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinguistiquesComponent } from './linguistiques.component';

describe('LinguistiquesComponent', () => {
  let component: LinguistiquesComponent;
  let fixture: ComponentFixture<LinguistiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguistiquesComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

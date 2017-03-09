/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformerModerateurComponent } from './informer-moderateur.component';

describe('InformerModerateurComponent', () => {
  let component: InformerModerateurComponent;
  let fixture: ComponentFixture<InformerModerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformerModerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformerModerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignalementComponent } from './signalement.component';

describe('SignalementComponent', () => {
  let component: SignalementComponent;
  let fixture: ComponentFixture<SignalementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

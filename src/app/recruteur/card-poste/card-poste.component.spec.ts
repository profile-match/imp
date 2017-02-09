/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardPosteComponent } from './card-poste.component';

describe('CardPosteComponent', () => {
  let component: CardPosteComponent;
  let fixture: ComponentFixture<CardPosteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPosteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModerateurComponent } from './moderateur.component';

describe('ModerateurComponent', () => {
  let component: ModerateurComponent;
  let fixture: ComponentFixture<ModerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

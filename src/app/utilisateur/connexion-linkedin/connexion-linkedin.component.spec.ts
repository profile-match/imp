/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConnexionLinkedinComponent } from './connexion-linkedin.component';

describe('ConnexionLinkedinComponent', () => {
  let component: ConnexionLinkedinComponent;
  let fixture: ComponentFixture<ConnexionLinkedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionLinkedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

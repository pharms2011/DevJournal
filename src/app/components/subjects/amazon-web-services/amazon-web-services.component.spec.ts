import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonWebServicesComponent } from './amazon-web-services.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AmazonWebServicesComponent', () => {
  let component: AmazonWebServicesComponent;
  let fixture: ComponentFixture<AmazonWebServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonWebServicesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonWebServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

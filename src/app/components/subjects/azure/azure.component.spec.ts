import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureComponent } from './azure.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AzureComponent', () => {
  let component: AzureComponent;
  let fixture: ComponentFixture<AzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonComponent } from './python.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PythonComponent', () => {
  let component: PythonComponent;
  let fixture: ComponentFixture<PythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

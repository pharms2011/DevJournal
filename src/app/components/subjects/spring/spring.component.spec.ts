import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringComponent } from './spring.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('SpringComponent', () => {
  let component: SpringComponent;
  let fixture: ComponentFixture<SpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

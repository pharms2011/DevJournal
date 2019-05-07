import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxComponent } from './linux.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('LinuxComponent', () => {
  let component: LinuxComponent;
  let fixture: ComponentFixture<LinuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

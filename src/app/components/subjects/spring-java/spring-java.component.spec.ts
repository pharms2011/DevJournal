import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringJavaComponent } from './spring-java.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('SpringJavaComponent', () => {
  let component: SpringJavaComponent;
  let fixture: ComponentFixture<SpringJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringJavaComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

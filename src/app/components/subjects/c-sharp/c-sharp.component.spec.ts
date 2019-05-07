import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSharpComponent } from './c-sharp.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CSharpComponent', () => {
  let component: CSharpComponent;
  let fixture: ComponentFixture<CSharpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSharpComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JUnitComponent } from './junit.component';

describe('JunitComponent', () => {
  let component: JUnitComponent;
  let fixture: ComponentFixture<JUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

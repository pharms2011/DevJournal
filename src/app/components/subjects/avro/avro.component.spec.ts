import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvroComponent } from './avro.component';

describe('AvroComponent', () => {
  let component: AvroComponent;
  let fixture: ComponentFixture<AvroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

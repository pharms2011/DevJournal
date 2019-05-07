import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonMachineLearningComponent } from './python-machine-learning.component';

describe('PythonMachineLearningComponent', () => {
  let component: PythonMachineLearningComponent;
  let fixture: ComponentFixture<PythonMachineLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonMachineLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonMachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

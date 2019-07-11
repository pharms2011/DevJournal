import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaDeveloperGuidelinesComponent } from './java-developer-guidelines.component';

describe('JavaDeveloperGuidelinesComponent', () => {
  let component: JavaDeveloperGuidelinesComponent;
  let fixture: ComponentFixture<JavaDeveloperGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaDeveloperGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaDeveloperGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

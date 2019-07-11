import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootAdminComponent } from './spring-boot-admin.component';

describe('SpringBootAdminComponent', () => {
  let component: SpringBootAdminComponent;
  let fixture: ComponentFixture<SpringBootAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringBootAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

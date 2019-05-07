import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {NgModule} from '@angular/core';
import {AngularComponent} from './components/subjects/angular/angular.component';
import {AngularMaterialComponent} from './components/subjects/angular/angular-material/angular-material.component';
import {AmazonWebServicesComponent} from './components/subjects/amazon-web-services/amazon-web-services.component';
import {AzureComponent} from './components/subjects/azure/azure.component';
import {CComponent} from './components/subjects/c/c.component';
import {CSharpComponent} from './components/subjects/c-sharp/c-sharp.component';
import {GitComponent} from './components/subjects/git/git.component';
import {LinuxComponent} from './components/subjects/linux/linux.component';
import {PythonComponent} from './components/subjects/python/python.component';
import {SpringComponent} from './components/subjects/spring/spring.component';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        FormsModule,
        MatCheckboxModule,
        AppRoutingModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        AngularComponent,
        AngularMaterialComponent,
        AmazonWebServicesComponent,
        AzureComponent,
        CComponent,
        CSharpComponent,
        GitComponent,
        LinuxComponent,
        PythonComponent,
        SpringComponent
      ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'}
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

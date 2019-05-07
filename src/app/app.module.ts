import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularComponent } from './components/subjects/angular/angular.component';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { AngularMaterialComponent } from './components/subjects/angular/angular-material/angular-material.component';
import { SpringComponent } from './components/subjects/spring/spring.component';
import { AmazonWebServicesComponent } from './components/subjects/amazon-web-services/amazon-web-services.component';
import { PythonComponent } from './components/subjects/python/python.component';
import { PythonMachineLearningComponent } from './components/subjects/python/python-machine-learning/python-machine-learning.component';
import { CComponent } from './components/subjects/c/c.component';
import { CSharpComponent } from './components/subjects/c-sharp/c-sharp.component';
import { LinuxComponent } from './components/subjects/linux/linux.component';
import { GitComponent } from './components/subjects/git/git.component';
import { AzureComponent } from './components/subjects/azure/azure.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    AngularMaterialComponent,
    SpringComponent,
    AmazonWebServicesComponent,
    PythonComponent,
    PythonMachineLearningComponent,
    CComponent,
    CSharpComponent,
    LinuxComponent,
    GitComponent,
    AzureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

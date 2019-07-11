import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

import { AngularComponent } from './components/subjects/angular/angular.component';
import { AngularMaterialComponent } from './components/subjects/angular/angular-material/angular-material.component';
import { AmazonWebServicesComponent } from './components/subjects/amazon-web-services/amazon-web-services.component';
import { PythonComponent } from './components/subjects/python/python.component';
import { PythonMachineLearningComponent } from './components/subjects/python/python-machine-learning/python-machine-learning.component';
import { CComponent } from './components/subjects/c/c.component';
import { CSharpComponent } from './components/subjects/c-sharp/c-sharp.component';
import { LinuxComponent } from './components/subjects/linux/linux.component';
import { GitComponent } from './components/subjects/git/git.component';
import { AzureComponent } from './components/subjects/azure/azure.component';
import {MatIconModule} from '@angular/material/icon';
import {SpringJavaComponent} from './components/subjects/spring-java/spring-java.component';
import {CorsComponent} from './components/subjects/cors/cors.component';
import {DjangoComponent} from './components/subjects/django/django.component';
import {JavaComponent} from './components/subjects/java/java.component';
import {JavaDeveloperGuidelinesComponent} from './components/subjects/java/java-developer-guidelines/java-developer-guidelines.component';
import {JUnitComponent} from './components/subjects/junit/junit.component';
import {OopConceptsComponent} from './components/subjects/oop-concepts/oop-concepts.component';
import {ReactjsComponent} from './components/subjects/reactjs/reactjs.component';
import { UnityComponent } from './components/subjects/unity/unity.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ProtractorComponent } from './components/subjects/angular/protractor/protractor.component';
import { SpringBootAdminComponent } from './components/subjects/spring-boot-admin/spring-boot-admin.component';
import { OAuth2Component } from './components/subjects/o-auth2/o-auth2.component';
import { CssComponent } from './components/subjects/css/css.component';
import { KafkaComponent } from './components/subjects/kafka/kafka.component';
import { AvroComponent } from './components/subjects/avro/avro.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    AngularMaterialComponent,
    AmazonWebServicesComponent,
    CorsComponent,
    DjangoComponent,
    PythonComponent,
    PythonMachineLearningComponent,
    CComponent,
    CSharpComponent,
    LinuxComponent,
    GitComponent,
    JavaComponent,
    JavaDeveloperGuidelinesComponent,
    JUnitComponent,
    ReactjsComponent,
    SpringJavaComponent,
    OopConceptsComponent,
    AzureComponent,
    UnityComponent,
    WelcomePageComponent,
    ProtractorComponent,
    SpringBootAdminComponent,
    OAuth2Component,
    CssComponent,
    KafkaComponent,
    AvroComponent
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
    MatIconModule,
    DragDropModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

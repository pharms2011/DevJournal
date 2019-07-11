import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularComponent} from './components/subjects/angular/angular.component';
import {AngularMaterialComponent} from './components/subjects/angular/angular-material/angular-material.component';
import {SpringJavaComponent} from './components/subjects/spring-java/spring-java.component';
import {AmazonWebServicesComponent} from './components/subjects/amazon-web-services/amazon-web-services.component';
import {AzureComponent} from './components/subjects/azure/azure.component';
import {CComponent} from './components/subjects/c/c.component';
import {CSharpComponent} from './components/subjects/c-sharp/c-sharp.component';
import {GitComponent} from './components/subjects/git/git.component';
import {LinuxComponent} from './components/subjects/linux/linux.component';
import {PythonComponent} from './components/subjects/python/python.component';
import {JUnitComponent} from './components/subjects/junit/junit.component';
import {ReactjsComponent} from './components/subjects/reactjs/reactjs.component';
import {DjangoComponent} from './components/subjects/django/django.component';
import {CorsComponent} from './components/subjects/cors/cors.component';
import {JavaComponent} from './components/subjects/java/java.component';
import {OopConceptsComponent} from './components/subjects/oop-concepts/oop-concepts.component';
import {JavaDeveloperGuidelinesComponent} from './components/subjects/java/java-developer-guidelines/java-developer-guidelines.component';
import {UnityComponent} from './components/subjects/unity/unity.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {ProtractorComponent} from './components/subjects/angular/protractor/protractor.component';
import {SpringBootAdminComponent} from './components/subjects/spring-boot-admin/spring-boot-admin.component';
import {OAuth2Component} from './components/subjects/o-auth2/o-auth2.component';
import {CssComponent} from './components/subjects/css/css.component';
import {KafkaComponent} from './components/subjects/kafka/kafka.component';
import {AvroComponent} from './components/subjects/avro/avro.component';

const routes: Routes = [
  {path: 'Welcome', component: WelcomePageComponent},
  {path: 'Amazon-Web-Services', component: AmazonWebServicesComponent},
  {path: 'Angular', component: AngularComponent},
  {path: 'Angular-Material', component: AngularMaterialComponent},
  {path: 'Avro', component: AvroComponent},
  {path: 'Azure', component: AzureComponent},
  {path: 'C', component: CComponent},
  {path: 'C-Sharp', component: CSharpComponent},
  {path: 'CORS', component: CorsComponent},
  {path: 'CSS', component: CssComponent},
  {path: 'django', component: DjangoComponent},
  {path: 'Git', component: GitComponent},
  {path: 'Java', component: JavaComponent},
  {path: 'JavaGuidelines', component: JavaDeveloperGuidelinesComponent},
  {path: 'JUnit', component: JUnitComponent},
  {path: 'Kafka', component: KafkaComponent},
  {path: 'Linux', component: LinuxComponent},
  {path: 'OAuth2', component: OAuth2Component},
  {path: 'OOP', component: OopConceptsComponent},
  {path: 'Protractor', component: ProtractorComponent},
  {path: 'Python', component: PythonComponent},
  {path: 'ReactJS', component: ReactjsComponent},
  {path: 'Spring-Boot-Admin', component: SpringBootAdminComponent},
  {path: 'Spring', component: SpringJavaComponent},
  {path: 'Unity', component: UnityComponent},
  {path: '**', redirectTo: 'Welcome'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularComponent} from './components/subjects/angular/angular.component';
import {AngularMaterialComponent} from './components/subjects/angular/angular-material/angular-material.component';
import {SpringComponent} from './components/subjects/spring/spring.component';
import {AmazonWebServicesComponent} from './components/subjects/amazon-web-services/amazon-web-services.component';
import {AzureComponent} from './components/subjects/azure/azure.component';
import {CComponent} from './components/subjects/c/c.component';
import {CSharpComponent} from './components/subjects/c-sharp/c-sharp.component';
import {GitComponent} from './components/subjects/git/git.component';
import {LinuxComponent} from './components/subjects/linux/linux.component';
import {PythonComponent} from './components/subjects/python/python.component';

const routes: Routes = [
  {path: 'Angular', component: AngularComponent},
  {path: 'Angular-Material', component: AngularMaterialComponent},
  {path: 'Amazon-Web-Services', component: AmazonWebServicesComponent},
  {path: 'Azure', component: AzureComponent},
  {path: 'C', component: CComponent},
  {path: 'C-Sharp', component: CSharpComponent},
  {path: 'Git', component: GitComponent},
  {path: 'Linux', component: LinuxComponent},
  {path: 'Python', component: PythonComponent},
  {path: 'Spring', component: SpringComponent},
  {path: '**', redirectTo: 'Angular'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

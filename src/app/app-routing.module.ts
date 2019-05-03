import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularComponent} from './components/subjects/angular/angular.component';
import {AngularMaterialComponent} from './components/subjects/angular/angular-material/angular-material.component';
import {SpringComponent} from './components/subjects/spring/spring.component';
import {AmazonWebServicesComponent} from './components/subjects/amazon-web-services/amazon-web-services.component';

const routes: Routes = [
  {path: 'Angular', component: AngularComponent},
  {path: 'Angular-Material', component: AngularMaterialComponent},
  {path: 'Amazon-Web-Services', component: AmazonWebServicesComponent},
  {path: 'Spring', component: SpringComponent},
  {path: '**', redirectTo: 'Angular'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

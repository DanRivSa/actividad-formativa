import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubmissionformComponent } from './components/submissionform/submissionform.component';
import { PastriesComponent } from './components/pastries/pastries.component';
import {SummaryComponent} from './components/summary/summary.component';

const routes: Routes = 
[
  {path:'',component:HomeComponent},
  {path:'submit',component:SubmissionformComponent},
  {path:'pastries',component:PastriesComponent},
  {path:'pastries/:id',component:SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

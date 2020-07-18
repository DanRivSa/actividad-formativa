import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionformComponent } from '../../components/submissionform/submissionform.component';
import { TableComponent } from '../../components/table/table.component';
import { PastriesComponent } from '../../components/pastries/pastries.component';
import { HomeComponent } from '../../components/home/home.component';
import {PastryService} from '../../services/pastry.service';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {SummaryComponent} from '../../components/summary/summary.component';
import {ReportService} from '../../services/report.service';

@NgModule({
  providers:[PastryService,ReportService],

  declarations: 
  [
    SubmissionformComponent,
    TableComponent,
    PastriesComponent,
    HomeComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],

  exports:
  [
    SubmissionformComponent,
    TableComponent,
    PastriesComponent,
    HomeComponent,
    SummaryComponent
  ]
})
export class PastryModule { }

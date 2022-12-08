import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../components/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableStudentComponent } from '../components/table-student/table-student.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';
import { RouterModule } from '@angular/router';
import { OptionComponent } from '../components/option/option.component';
import {NgxPaginationModule}from 'ngx-pagination'




@NgModule({
  declarations: [
    StudentComponent,
    TableStudentComponent,
    OptionComponent
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule

    
  ],
  exports:[
    StudentComponent,
    TableStudentComponent,
    OptionComponent
    
  ]
})
export class ModuleDashboardModule { }

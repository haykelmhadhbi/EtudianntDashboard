import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './dashboard/components/student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { ModuleDashboardModule } from './dashboard/module-dashboard/module-dashboard.module';
import { TableStudentComponent } from './dashboard/components/table-student/table-student.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/module/shared/shared.module';
import { NavStudComponent } from './dashboard/components/nav-stud/nav-stud.component';
import { IStudent } from './dashboard/model/student';
import { OptionComponent } from './dashboard/components/option/option.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavStudComponent,
    
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
    
    


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './JobPortal/user/login/login.component';
import { RegisterComponent } from './JobPortal/user/register/register.component';
import { UserService } from './Services/user/user.service';
import { JobService } from './Services/jobs/jobs.service';
import { ForgotPasswordComponent } from './JobPortal/user/forgot-password/forgot-password.component';
import { AppliedJobsComponent } from './JobPortal/candidate/applied-jobs/applied-jobs.component';
import { AvailableJobsComponent } from './JobPortal/candidate/available-jobs/available-jobs.component';
import { PostJobComponent } from './JobPortal/recruiter/post-job/post-job.component';
import { PostedJobsComponent } from './JobPortal/recruiter/posted-jobs/posted-jobs.component';
import { LogoutComponent } from './JobPortal/user/logout/logout.component';
import { AuthGuard } from './JobPortal/user/auth.guard';
import { NoCacheHeadersInterceptor } from './Services/interceptor/interceptor.service';
import { PageNotFound404Component } from './JobPortal/page-not-found404/page-not-found404.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AppliedJobsComponent,
    AvailableJobsComponent,
    PostJobComponent,
    PostedJobsComponent,
    LogoutComponent,
    PageNotFound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [ NoCacheHeadersInterceptor,
  UserService, 
  JobService, 
  AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }

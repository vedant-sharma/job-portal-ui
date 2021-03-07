import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './JobPortal/user/login/login.component';
import { RegisterComponent } from './JobPortal/user/register/register.component';
import { ForgotPasswordComponent } from './JobPortal/user/forgot-password/forgot-password.component';
import { AppliedJobsComponent } from './JobPortal/candidate/applied-jobs/applied-jobs.component';
import { AvailableJobsComponent } from './JobPortal/candidate/available-jobs/available-jobs.component';
import { PostJobComponent } from './JobPortal/recruiter/post-job/post-job.component';
import { PostedJobsComponent } from './JobPortal/recruiter/posted-jobs/posted-jobs.component';
import { LogoutComponent } from './JobPortal/user/logout/logout.component';
import { AuthGuard } from './JobPortal/user/auth.guard';
import { PageNotFound404Component } from './JobPortal/page-not-found404/page-not-found404.component';



const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'jobs', component: AvailableJobsComponent, canActivate: [AuthGuard]},
  { path: 'applied-jobs', component : AppliedJobsComponent, canActivate: [AuthGuard]},
  { path: 'jobs/new' , component : PostJobComponent, canActivate: [AuthGuard] },
  { path: 'posted-jobs', component : PostedJobsComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent},
  { path: '**', component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

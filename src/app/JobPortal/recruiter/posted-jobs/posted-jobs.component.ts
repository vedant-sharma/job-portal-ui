import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../Services/jobs/jobs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { paginateModel } from '../../../Models/job.model';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {

  jobs: any;
  applicants : any;
  paginateObj = new paginateModel();
  noApplicantsFlag: boolean = true;
  httpErr: boolean = false;
  httpErrMsg : string = "";
  pageSize : number;
  nojobsErr : boolean = false;

  constructor(private jobService : JobService) { }

  ngOnInit() {
    this.getPostedJobs();
  }

  getPostedJobs(){

    this.jobService.getPostedJobs(this.paginateObj.page).subscribe( res =>{
      this.httpErr = false;
      this.jobs = res.data;
      this.paginateObj.totalItem = res.meta.pagination.total;
      if(this.jobs.length == 0){
        this.nojobsErr = true;
      }

    },
    (err : HttpErrorResponse)=>{
      this.httpErr = true;
      this.httpErrMsg = err.error.message;
    });
  }

  applications(uuid){

    this.jobService.getApplicants(uuid).subscribe( res=>{
      this.noApplicantsFlag = false;
      this.applicants = res.data;

      if(this.applicants.length == 0)
      this.noApplicantsFlag = true;
     },
    (err : HttpErrorResponse)=>{
      this.httpErr = true;
      this.httpErrMsg = err.error.message;
    });
  }

  pageChange(){
    this.getPostedJobs();
  }

}

import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../Services/jobs/jobs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { paginateModel } from '../../../Models/job.model';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  jobs : any;
  noJobsErr : boolean = false;
  errMsg : string = "";
  httpErr: boolean = false;
  httpErrMsg : string = "";
  paginateObj = new paginateModel();

  constructor( private jobService : JobService, private router: Router) { }

  ngOnInit() {
    this.getAppliedJobs();
  }

  getAppliedJobs(){

    this.httpErr = false;
    this.jobService.getAppliedJobs(this.paginateObj.page).subscribe( res =>{
      this.jobs = res.data; 
      this.paginateObj.totalItem = res.meta.pagination.total;
      if(this.jobs.length == 0){
        this.noJobsErr = true;
        this.errMsg = "Sorry, you haven't applied to any jobs";
      }

      else{
        this.noJobsErr = false;
        this.jobs = res.data;
      }
    },
    (err : HttpErrorResponse)=>{
      this.httpErr = true;
      this.httpErrMsg = err.error.message;
    });

  }

  pageChange(){
    this.getAppliedJobs();
  }

}

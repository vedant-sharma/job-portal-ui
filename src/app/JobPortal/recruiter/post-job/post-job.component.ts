import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../Services/jobs/jobs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostJobModel } from '../../../Models/job.model'

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  newJob = new PostJobModel();
  jobSuccessMsg : string = "";
  jobErrorMsg : string = "";
  postedFlag: boolean = false;
  notPostedFlag: boolean = false;

  constructor(private jobService : JobService) { }

  ngOnInit() {
    this.newJob.title = "";
  }

  postJob(){

    this.jobService.postJob(this.newJob).subscribe( data=>{
      this.postedFlag = true;
      this.notPostedFlag = false;
      this.jobSuccessMsg = "Your Job was Successfully Posted";
    },
    (err : HttpErrorResponse)=>{
      this.postedFlag = false;
      this.notPostedFlag = true;
      this.jobErrorMsg = err.error.message;
    });

  }  

}

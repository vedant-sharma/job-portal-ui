import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../Services/jobs/jobs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
import { paginateModel } from '../../../Models/job.model';

@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.component.html',
  styleUrls: ['./available-jobs.component.css']
})
export class AvailableJobsComponent implements OnInit {

  jobs: string[];
  index: number = 0;
  nojobsErr : boolean = false;
  httpErr: boolean = false;
  httpErrMsg : string = "";
  paginateObj = new paginateModel();

  constructor( private jobService : JobService) { }

  ngOnInit() {
    this.availableJobs();
  }


  availableJobs(){
  
    this.jobService.availableJobs(this.paginateObj.page).subscribe(res => { 
      this.nojobsErr = false;
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

  apply(uuid){

    if(confirm("Do you really wish to apply ? ")){
    this.jobService.apply(uuid).subscribe((data : any)=>{
      this.availableJobs();
    },
    (err : HttpErrorResponse)=>{
      this.httpErr = true;
      this.httpErrMsg = err.error.message;
    });
  }
}

pageChange(){
  this.availableJobs();
}

}

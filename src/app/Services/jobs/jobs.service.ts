import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { PostJobModel } from '../../Models/job.model';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class JobService {

    user :any ;
    httpOptions :any;
    
    constructor(private _http: HttpClient) {}

  availableJobs(page):Observable<any>{

    this.user = JSON.parse(localStorage.getItem("userData"));

    this.httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer ${this.user.token}`
    })
  };

  console.log(environment.apirootUrl);

    return this._http.get(environment.apirootUrl + 'jobs?page='+page, this.httpOptions);
  }

  apply(uuid):Observable<any>{

    this.user = JSON.parse(localStorage.getItem("userData"));

    this.httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer ${this.user.token}`
    })
  };

    return this._http.post(environment.apirootUrl+ 'jobs/' + uuid + '/apply', null, this.httpOptions);
    
  }

  getAppliedJobs(page):Observable<any>{

    this.user = JSON.parse(localStorage.getItem("userData"));

    this.httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer ${this.user.token}`
    })
  };

    return this._http.get(environment.apirootUrl+ 'applied-jobs?page='+page, this.httpOptions);

  }

  postJob( newJob : PostJobModel):Observable<any>{
    
    this.user = JSON.parse(localStorage.getItem("userData"));

    this.httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer ${this.user.token}`
    })
  };

    return this._http.post(environment.apirootUrl+ 'jobs/new', newJob, this.httpOptions);
  }

  getPostedJobs(page):Observable<any>{
    
    this.user = JSON.parse(localStorage.getItem("userData"));

    this.httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer ${this.user.token}`
    })
  };

    return this._http.get(environment.apirootUrl+ 'posted-jobs?page='+page, this.httpOptions);

  }

  getApplicants(uuid):Observable<any>{
    
    this.user = JSON.parse(localStorage.getItem("userData"));

    this.httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Authorization': `Bearer ${this.user.token}`
    })
  };

    return this._http.get(environment.apirootUrl+ 'jobs/' + uuid + '/applicants', this.httpOptions);
    
  }


}
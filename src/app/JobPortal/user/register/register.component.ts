import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user/user.service';
import { AuthenticationModel, RegistrationModel} from '../../../Models/user.model'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel= new RegistrationModel();
  errmsgemail : boolean = false;
  errmsgrole : boolean = false;
  message : string;
  user: any;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.userModel.role_id = 0;
    if( this.user = JSON.parse(localStorage.getItem('userData')))
    {
      if(this.user.role_id == 2)
      this.router.navigate(['/jobs']);
      else
      this.router.navigate(['jobs/new']);
    }
  }

  register(value : any){
    this.errmsgemail = false;
    this.errmsgrole = false;
    
    if(this.userModel.role_id != 0){

      this.userService.userRegistration(this.userModel).subscribe((res : any)=>{
      localStorage.setItem("userData",JSON.stringify(res.data));
      if(res.data.role_id == 2)
      this.router.navigate(['/jobs']);
      else
      this.router.navigate(['jobs/new']);
      }, 
      (err : HttpErrorResponse)=>{
      if(err.error.code = 422){
      this.errmsgemail = true;
      this.message = err.error.errors.email[0];
    }
    else{
      this.message = err.error.message;
    }
    });
    }
    
    else{
      this.errmsgrole = true;
    }
  }

}

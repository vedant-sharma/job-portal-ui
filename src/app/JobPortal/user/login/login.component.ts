import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user/user.service';
import { AuthenticationModel} from '../../../Models/user.model'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] //background-color:#F0F0F0;
})
export class LoginComponent implements OnInit {

  userModel = new AuthenticationModel();
  code : number;
  message : string;
  errmsg : boolean = false;
  user : any;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {

    if( this.user = JSON.parse(localStorage.getItem('userData')))
    {
      if(this.user.role_id == 2)
      this.router.navigate(['/jobs']);
      else
      this.router.navigate(['jobs/new']);
    }
  }

  Authenticate(email, password) {
    this.errmsg = false;
    this.userModel.email = email;
    this.userModel.password = password;

    this.userService.userAuthentication(this.userModel).subscribe((res : any)=>{
      localStorage.setItem("userData",JSON.stringify(res.data));

      if(res.data.role_id == 2)
      this.router.navigate(['/jobs']);

      else if(res.data.role_id == 3)
      this.router.navigate(['jobs/new']);

      else{
      this.errmsg = true;
      this.message = "Please login through ADMIN panel";
      }
    },
    (err : HttpErrorResponse)=>{
      this.errmsg = true;
      this.message = err.error.message;
    });

  }


}

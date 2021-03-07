import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user/user.service';
import { AuthenticationModel, VerifyEmailModel, resetPasswordModel} from '../../../Models/user.model'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  verify = new VerifyEmailModel();
  reset = new resetPasswordModel();
  errMsg : boolean = false;
  verifyContainer : boolean = true;
  resetContainer : boolean = false;
  successMsgOtp : boolean = false;
  errResetMsg : boolean = false;
  invalidmsg : string = "";
  message: string = "";
  user: any;

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

  Verify(email){
    this.verify.email = email;
    this.errMsg = false;

    this.userService.userVerifyEmail(this.verify).subscribe((data : any)=>{
      this.verifyContainer = false;
      this.resetContainer = true;
      this.successMsgOtp = true;
      this.message = data.data;
    },
    (err : HttpErrorResponse)=>{
      this.errMsg = true;
      this.message = err.error.message;
    });
  }

  Reset(otp, newPassword, ConfPassword){
    this.reset.otp = otp;
    this.reset.new_password = newPassword;

    if(newPassword == ConfPassword){
    this.userService.userResetPassword(this.reset).subscribe((data : any)=>{
      this.errMsg = true;
      this.message = data.data;
      this.errResetMsg = false;

    },
    (err : HttpErrorResponse)=>{
      this.errResetMsg = true;
      this.successMsgOtp = false;
      this.invalidmsg = err.error.message;
    });

  }
  else{
    this.invalidmsg = "Passwords didn't match, Try Again";
    this.errResetMsg = true;
    }
}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AuthenticationModel, VerifyEmailModel, resetPasswordModel, RegistrationModel} from '../../Models/user.model';
import { environment } from '../../../environments/environment.prod';
@Injectable()
export class UserService{

  httpOptions :any;
    
    constructor(private _http:HttpClient) {
      
      this.httpOptions = {
        headers: new HttpHeaders({
          'Cache-Control': 'no-cache'
        })
      };
    }

  userRegistration(user : RegistrationModel):Observable<any>{

    return this._http.post(environment.apirootUrl+ 'register', user, this.httpOptions)
  }

  userAuthentication(auth : AuthenticationModel):Observable<any>{

    return this._http.post(environment.apirootUrl + 'login', auth, this.httpOptions);
  }

  userVerifyEmail(verify : VerifyEmailModel):Observable<any>{

    return this._http.post(environment.apirootUrl+ 'forgot-password', verify, this.httpOptions);
  }

  userResetPassword(reset : resetPasswordModel):Observable<any>{

    return this._http.post(environment.apirootUrl + 'reset-password', reset, this.httpOptions);
  }

}
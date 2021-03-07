import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    user: any;

    constructor(private router : Router){
        this.user = JSON.parse(localStorage.getItem('userData'));
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if(JSON.parse(localStorage.getItem('userData')) != null)
            return true;
            this.router.navigate(['/login']);
            return false;
        }
}
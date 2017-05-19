import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../service/login.service';

@Injectable()
export class LoginRouteGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }
    canActivate() {
        if (this.loginService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['']);
        }
    }
}
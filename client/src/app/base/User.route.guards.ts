import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../service/login.service';

@Injectable()
export class UserControlRouteGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }
    canActivate() {
        if (this.loginService.isAdmineUser()) {
            return true;
        } else {
            alert('Sorry you do not have access to this functionality.');
        }
    }
}
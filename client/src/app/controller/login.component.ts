import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'
import {Http} from '@angular/http'
import {Router} from '@angular/router'
import {ComponentAction} from '../base/Component.action'
import {Member} from '../base/member'
@Component({
    moduleId:module.id,
    selector:'login',
    template:`
    
        <link href="assets/css/signin.css" rel="stylesheet">
       
        <div class="alert alert-danger" *ngIf="!isloggedIn" role="alert">
            <strong>Oh snap!</strong> Not a valid user . Please try again.
        </div>


        <div class="container" *ngIf="!register">
            <form #signinForm="ngForm" class="form-signin" (ngSubmit)="validate(signinForm)" onsubmit="return false">
            <h2 class="form-signin-heading">Please sign in</h2>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Email address" required autofocus ngModel>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" name="inputPassword" class="form-control" placeholder="Password" required ngModel>
            <div class="checkbox">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <button type="button" class="btn btn-link" routerLink="/register" >Create new Account</button>
            </form>
        </div>

    `
})

export class LoginComponent extends ComponentAction{
    isloggedIn:boolean = true;
    
    constructor(private http :Http , private router:Router){
        super();
    }



    validate(ngform:NgForm){
        var user = ngform.value.inputEmail ;
        this.http.post('/api/validate/login', {email:ngform.value.inputEmail,password:ngform.value.inputPassword})
        .map(result => result.json())
        .subscribe((result) => {
            this.isloggedIn = result.isvalid;
            let member = new Member(result.userID, user,result.isadmine);
            super.setMember(member);
            if(this.isloggedIn){
                this.router.navigate(['./dash'])
            }
        })
    }
}
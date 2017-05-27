import { Component, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { ComponentAction } from '../base/Component.action'
import { Member } from '../base/member'
import { FirebaseConfig } from '../base/firebaseConfig'
@Component({
    moduleId: module.id,
    selector: 'signup',
    template: `

        <link href="assets/css/signin.css" rel="stylesheet">
   
        <div class="alert alert-danger fade in" [class.hidden]="isSuccess">
            <a href="#" class="close" data-dismiss="alert">&times;</a>
            <strong>Error!</strong> This User Already Registered . please Sign in.
        </div>
        <div class="container">
            <form class="form-signin" (ngSubmit)="register()">
                <h2 class="form-signin-heading">Please sign Up</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Email address" [(ngModel)]="email" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" name="inputPassword" class="form-control" placeholder="Password" [(ngModel)]="password" required>
                <label for="confirmpassword" class="sr-only">Password</label>
                <input type="password" id="confirmpassword" name="confirmpassword" class="form-control" placeholder="Confirm Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                <button type="button" class="btn btn-link" routerLink="" >Login</button>
            </form>
        </div>
    
    `
})

export class RegisterComponent extends ComponentAction {
    email: string;
    password: string
    isSuccess: boolean = true;
    firebase = FirebaseConfig.initialize();
    constructor(private http: Http, private router: Router) {
        super();
    }
    register() {
        // steps
        // add authentication user to firebase
        // if success only do the rest else return
        // if success add user to server MongoDb 
        // if success the above step setup user add user to firebase database
        // else delete user from firebase

        this.firebase.addUser(this.email, this.password)
            .then((firebaseAuthenticated) => {
                this.http.post('api/validate/register/', { email: this.email, password: this.password })
                    .subscribe(
                    (response) => {
                        this.isSuccess = response.json().success;
                        if (this.isSuccess) {
                            const userObj = { "userId": response.json().userID, "email": this.email }
                            this.firebase.addToDatabase('user', response.json().userID, userObj);
                            let member = new Member(this.email, "false", response.json().userID);//isadmine:false
                            super.setMember(member);
                            this.router.navigate(['./dash']);
                        } else {
                            this.firebase.deleteUser();                            
                        }
                    });
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);
            });

    }

}
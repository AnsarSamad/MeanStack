"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
let LoginComponent = class LoginComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isloggedIn = true;
    }
    validate(ngform) {
        console.log('values :' + ngform.value);
        var user = ngform.value.inputEmail;
        this.http.post('/api/validate/login', { email: ngform.value.inputEmail, password: ngform.value.inputPassword })
            .map(result => result.json())
            .subscribe((result) => {
            this.isloggedIn = result.isvalid;
            if (this.isloggedIn) {
                this.router.navigate(['./dash']);
            }
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        template: `
    
        <link href="../css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">

        <div class="alert alert-danger" [class.hidden]="isloggedIn" role="alert">
        <span class="close" data-dismiss="alert">&times;</span>
        <strong>Error!</strong>Not a valid user . Please try again.
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
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
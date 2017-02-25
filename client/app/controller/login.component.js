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
    showRegister() {
        console.log('show register action triggered');
    }
    validate(ngform) {
        console.log('values :' + ngform.value);
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
        templateUrl: '../html/login.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
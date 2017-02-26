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
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
let RegisterComponent = class RegisterComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isSuccess = true;
    }
    register() {
        this.http.post('api/validate/register/', { email: this.email, password: this.password })
            .subscribe((response) => {
            this.isSuccess = response.json().success;
            console.log('success:' + this.isSuccess);
            if (this.isSuccess) {
                this.router.navigate(['./dash']);
            }
        });
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signup',
        templateUrl: '../html/register.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
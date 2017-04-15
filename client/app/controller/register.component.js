"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var Component_action_1 = require("../base/Component.action");
var member_1 = require("../base/member");
var RegisterComponent = (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(http, router) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.isSuccess = true;
        return _this;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.http.post('api/validate/register/', { email: this.email, password: this.password })
            .subscribe(function (response) {
            _this.isSuccess = response.json().success;
            if (_this.isSuccess) {
                var member = new member_1.Member(_this.email, "false", response.json().userID); //isadmine:false
                _super.prototype.setMember.call(_this, member);
                console.log('success:' + _this.isSuccess);
                _this.router.navigate(['./dash']);
            }
        });
    };
    return RegisterComponent;
}(Component_action_1.ComponentAction));
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signup',
        template: "\n\n        <link href=\"../css/main.css\" rel=\"stylesheet\">\n        <link rel=\"stylesheet\" href=\"../../bower_components/bootstrap/dist/css/bootstrap.min.css\">    \n        <div class=\"alert alert-danger fade in\" [class.hidden]=\"isSuccess\">\n            <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>\n            <strong>Error!</strong> This User Already Registered . please Sign in.\n        </div>\n        <div class=\"container\">\n            <form class=\"form-signin\" (ngSubmit)=\"register()\">\n                <h2 class=\"form-signin-heading\">Please sign Up</h2>\n                <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n                <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" [(ngModel)]=\"email\" required autofocus>\n                <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n                <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" required>\n                <label for=\"confirmpassword\" class=\"sr-only\">Password</label>\n                <input type=\"password\" id=\"confirmpassword\" name=\"confirmpassword\" class=\"form-control\" placeholder=\"Confirm Password\" required>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign Up</button>\n                <button type=\"button\" class=\"btn btn-link\" routerLink=\"\" >Login</button>\n            </form>\n        </div>\n    \n    "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
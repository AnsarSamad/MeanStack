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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Component_action_1 = require("../base/Component.action");
var member_1 = require("../base/member");
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(http, router) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.isloggedIn = true;
        return _this;
    }
    LoginComponent.prototype.validate = function (ngform) {
        var _this = this;
        console.log('values :' + ngform.value);
        var user = ngform.value.inputEmail;
        this.http.post('/api/validate/login', { email: ngform.value.inputEmail, password: ngform.value.inputPassword })
            .map(function (result) { return result.json(); })
            .subscribe(function (result) {
            console.log('userID :' + result.userID);
            _this.isloggedIn = result.isvalid;
            var member = new member_1.Member(result.userID, user, result.isadmine);
            _super.prototype.setMember.call(_this, member);
            if (_this.isloggedIn) {
                _this.router.navigate(['./dash']);
            }
        });
    };
    return LoginComponent;
}(Component_action_1.ComponentAction));
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        template: "\n    \n        <link href=\"../css/main.css\" rel=\"stylesheet\">\n        <link rel=\"stylesheet\" href=\"../../bower_components/bootstrap/dist/css/bootstrap.min.css\">\n\n        <div class=\"alert alert-danger\" [class.hidden]=\"isloggedIn\" role=\"alert\">\n        <span class=\"close\" data-dismiss=\"alert\">&times;</span>\n        <strong>Error!</strong>Not a valid user . Please try again.\n        </div>\n        <div class=\"container\" *ngIf=\"!register\">\n            <form #signinForm=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"validate(signinForm)\" onsubmit=\"return false\">\n            <h2 class=\"form-signin-heading\">Please sign in</h2>\n            <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n            <input type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus ngModel>\n            <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n            <input type=\"password\" id=\"inputPassword\" name=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required ngModel>\n            <div class=\"checkbox\">\n                <label>\n                <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                </label>\n            </div>\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n            <button type=\"button\" class=\"btn btn-link\" routerLink=\"/register\" >Create new Account</button>\n            </form>\n        </div>\n\n    "
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Component_action_1 = require("../base/Component.action");
var DashBoardcomponent = (function (_super) {
    __extends(DashBoardcomponent, _super);
    function DashBoardcomponent() {
        var _this = _super.call(this) || this;
        _this.user = _super.prototype.getMember.call(_this).membername;
        return _this;
    }
    return DashBoardcomponent;
}(Component_action_1.ComponentAction));
DashBoardcomponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'dashboard',
        template: "\n     <link rel=\"stylesheet\" href=\"../css/dashboard.css\">\n       <body>\n\n            <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n               <div class=\"container-fluid\">\n                  <div class=\"navbar-header\">\n                     <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                     <span class=\"sr-only\">Toggle navigation</span>\n                     <span class=\"icon-bar\"></span>\n                     <span class=\"icon-bar\"></span>\n                     <span class=\"icon-bar\"></span>\n                     </button>\n                     <a class=\"navbar-brand\" href=\"#\">MeanStack</a>\n                  </div>\n                  <div id=\"navbar\" class=\"navbar-collapse collapse\">\n                     <ul class=\"nav navbar-nav navbar-right\">\n                        <li *ngIf=\"\"><span class=\"glyphicon glyphicon-user\" style=\"background: gray;\"></span></li>\n                        <li><a href=\"#\">{{getMember().membername}}{{getMember().isadmine}}</a></li>\n                        <li><a href=\"#\">Settings</a></li>\n                        <li><a href=\"#\">Profile</a></li>\n                     </ul>\n                     \n                  </div>\n               </div>\n            </nav>\n            <div class=\"container-fluid\">\n               <div class=\"row\">\n                  <div class=\"col-sm-3 col-md-2 sidebar\">\n                     <ul class=\"nav nav-sidebar\">\n                        <li class=\"active\"><a [routerLink]=\"['events']\">Events</a></li>\n                        <li><a [routerLink]=\"['task']\">Tasks</a></li>\n                        <li><a [routerLink]=\"['weather']\">Weather</a></li>\n                     </ul>\n                     \n                  </div>\n                  <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n                     <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                           am in dashboard\n                              <router-outlet></router-outlet>\n                           \n                        </table>\n                     </div>\n                  </div>\n               </div>\n            </div>\n              \n         </body>\n    \n    "
    }),
    __metadata("design:paramtypes", [])
], DashBoardcomponent);
exports.DashBoardcomponent = DashBoardcomponent;
//# sourceMappingURL=dashboard.component.js.map
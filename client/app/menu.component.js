"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var menuComponent = (function () {
    function menuComponent() {
    }
    return menuComponent;
}());
menuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        template: "\n    \n        <a [routerLink]=\"['/add']\">Add task</a>\n        <a [routerLink]=\"['/edit']\">Edit T</a>\n        <a [routerLink]=\"['/Other']\">Other</a>\n        <a [routerLink]=\"['/spotify']\">Spotify</a>\n        <router-outlet></router-outlet>\n        "
    })
], menuComponent);
exports.menuComponent = menuComponent;
//# sourceMappingURL=menu.component.js.map
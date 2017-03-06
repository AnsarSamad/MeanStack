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
let DashBoardcomponent = class DashBoardcomponent {
    constructor() {
    }
};
DashBoardcomponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dashboard',
        template: `
    
    <body>
      <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
      <link href="../css/dashboard.css" rel="stylesheet">
        <nav class="navbar navbar-inverse navbar-fixed-top">
         <div class="container-fluid">
            <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               </button>
               <a class="navbar-brand" href="#">MeanStack</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
               <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Help</a></li>
               </ul>
               <form class="navbar-form navbar-right">
                  <input type="text" class="form-control" placeholder="Search...">
               </form>
            </div>
         </div>
      </nav>
      <div class="container-fluid">
         <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
               <ul class="nav nav-sidebar">
                  <li class="active"><a routerLink="events">Events <span class="sr-only">(current)</span></a></li>
                  <li><a routerLink="task">Task</a></li>
                  <li><a routerLink="weather">Weather</a></li>
               </ul>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <!-- loads event component -->             
               <router-outlet></router-outlet>
            </div>
         </div>
      </div>
    </body>
    `
    }),
    __metadata("design:paramtypes", [])
], DashBoardcomponent);
exports.DashBoardcomponent = DashBoardcomponent;
//# sourceMappingURL=dashboard.component.js.map
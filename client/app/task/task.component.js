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
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
require("rxjs/Rx");
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTask().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    TaskComponent.prototype.addTask = function () {
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task',
        template: "\n    \n        <link rel=\"stylesheet\" href=\"../../bower_components/bootstrap/dist/css/bootstrap.min.css\">\n        <div>\n            <button routerLink=\"../task\" class=\"btn btn-primary\">All Task</button>\n            <button routerLink=\"addtask\" class=\"btn btn-primary\">Add Task</button>\n        </div>\n            <!-- loads child component list task and add new task -->\n            <router-outlet></router-outlet>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"table-hover table-responsive table-bordered\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Title</th>\n                                <th>Activity</th>\n                                <th>Status</th>\n                                <th>AssignTo</th>\n                                <th>Spritn</th>\n                                <th>Hours</th>\n                                <th class=\"text-center\">Action</th>\n                            </tr>\n                        </thead>\n                        <tr *ngFor=\"let task of tasks\">\n                            <td>{{task.title}}</td>\n                            <td>{{task.activity}}</td>\n                            <td>{{task.status}}</td>\n                            <td>{{task.assignto}}</td>\n                            <td>{{task.sprint}}</td>\n                            <td>{{task.hours}}</td>\n                            <td class=\"text-center\"><a class='btn btn-info btn-xs' href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> <a href=\"#\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span> Del</a></td>\n                        </tr>\n                    </table>\n            </div>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map
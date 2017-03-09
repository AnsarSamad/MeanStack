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
const task_service_1 = require("./task.service");
require("rxjs/Rx");
let TaskComponent = class TaskComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.taskService.getTask().subscribe(tasks => {
            this.tasks = tasks;
        });
    }
    addTask() {
    }
};
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task',
        template: `
    
        <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
        <div>
            <button routerLink="../task" class="btn btn-primary">All Task</button>
            <button routerLink="addtask" class="btn btn-primary">Add Task</button>
        </div>
            <!-- loads child component list task and add new task -->
            <router-outlet></router-outlet>
        <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Activity</th>
                    <th>Status</th>
                    <th>AssignTo</th>
                    <th>Spritn</th>
                    <th>Hours</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tr *ngFor="let task of tasks">
                <td>{{task.title}}</td>
                <td>{{task.activity}}</td>
                <td>{{task.status}}</td>
                <td>{{task.assignto}}</td>
                <td>{{task.sprint}}</td>
                <td>{{task.hours}}</td>
                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
            </tr>
        </table>
        </div>
    
    `
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map
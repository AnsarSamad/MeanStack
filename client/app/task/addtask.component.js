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
const core_1 = require('@angular/core');
const addtask_service_1 = require('./addtask.service');
const Task_1 = require('../model/Task');
let AddNewTaskComponent = class AddNewTaskComponent {
    constructor(addTaskService) {
        this.addTaskService = addTaskService;
    }
    addTask(form) {
        console.log(form.value);
        const task = new Task_1.Task(form.value.title, false);
        this.addTaskService.addtask(task);
    }
};
AddNewTaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'addtask',
        templateUrl: 'addtask.component.html'
    }), 
    __metadata('design:paramtypes', [addtask_service_1.AddTaskService])
], AddNewTaskComponent);
exports.AddNewTaskComponent = AddNewTaskComponent;
//# sourceMappingURL=addtask.component.js.map
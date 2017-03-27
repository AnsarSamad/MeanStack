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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var addtask_service_1 = require("./addtask.service");
var AddNewTaskComponent = (function () {
    function AddNewTaskComponent(addTaskService) {
        this.addTaskService = addTaskService;
    }
    AddNewTaskComponent.prototype.addTask = function (form) {
        // console.log(form.value);
        // const task = new Task(form.value.title,false);
        // this.addTaskService.addtask(task);
    };
    return AddNewTaskComponent;
}());
AddNewTaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'newtask',
        template: "\n    \n        <link rel=\"stylesheet\" href=\"../../bower_components/bootstrap/dist/css/bootstrap.min.css\">\n    <form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleSelect1\">Example select</label>\n    <select class=\"form-control\" id=\"exampleSelect1\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleSelect2\">Example multiple select</label>\n    <select multiple class=\"form-control\" id=\"exampleSelect2\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleTextarea\">Example textarea</label>\n    <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputFile\">File input</label>\n    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n    <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n    \n    "
    }),
    __metadata("design:paramtypes", [addtask_service_1.AddTaskService])
], AddNewTaskComponent);
exports.AddNewTaskComponent = AddNewTaskComponent;
//# sourceMappingURL=addtask.component.js.map
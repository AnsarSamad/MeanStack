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
var event_service_1 = require("../service/event.service");
require("rxjs/Rx");
var EventComponent = (function () {
    function EventComponent(eventService) {
        var _this = this;
        this.mode = "start";
        eventService.getEvents()
            .subscribe(function (result) {
            console.log('events from mongo :' + result);
            _this.events = result;
        });
    }
    return EventComponent;
}());
EventComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'event',
        template: "\n    \n\n                        <thead>\n                            <tr>\n                                <th>Title</th>\n                                <th>Place</th>\n                                <th>Tasks</th>\n                                <th>Fees</th>\n                                <th>Description</th>\n                                <th>Created</th>\n                                <th>Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let evnt of events\">\n                                <td>{{evnt.title}}</td>\n                                <td>{{evnt.place}}</td>\n                                <td>{{evnt.task.title}}</td>\n                                <td>{{evnt.fees}}</td>\n                                <td>{{evnt.descr}}</td>\n                                <td>{{evnt.created}}</td>\n                                <td><a class='btn btn-info btn-xs' href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> <a href=\"#\" class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span> Del</a></td>\n                            </tr>\n                    </tbody>\n    "
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventComponent);
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map
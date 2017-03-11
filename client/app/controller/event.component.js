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
const event_service_1 = require("../service/event.service");
require("rxjs/Rx");
let EventComponent = class EventComponent {
    constructor(eventService) {
        this.mode = "start";
        eventService.getEvents()
            .subscribe(result => {
            console.log('events from mongo :' + result);
            this.events = result;
        });
    }
};
EventComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'event',
        template: `
    
    <link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css">
     <div>
        <button routerLink="../events" class="btn btn-primary">All Event</button>
        <button routerLink="addevent" class="btn btn-primary">Add Event</button>
    </div>
    <!-- loads child component list eventss and add new events -->
    <router-outlet></router-outlet>
    <div class="container" [class.hidden]="">
        <div class="row">
                <div class="table-hover table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Place</th>
                                <th>Tasks</th>
                                <th>Fees</th>
                                <th>Description</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tr *ngFor="let evnt of events">
                            <td>{{evnt.title}}</td>
                            <td>{{evnt.place}}</td>
                            <td>{{evnt.task.title}}</td>
                            <td>{{evnt.fees}}</td>
                            <td>{{evnt.descr}}</td>
                            <td>{{evnt.created}}</td>
                            <td><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
                        </tr>
                    </table>
                </div>
            </div>
    </div>
    `
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventComponent);
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map
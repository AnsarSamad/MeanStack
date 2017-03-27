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
var http_1 = require("@angular/http");
var AddEventService = (function () {
    function AddEventService(http) {
        this.http = http;
    }
    AddEventService.prototype.saveEvent = function () {
        console.log('am in save event service calll');
        var eventData = {
            title: 'test',
            descr: 'test',
            place: 'test',
            fees: 123,
            tsk_title: 'test',
            tsk_content: 'test',
            tsk_price: 'test'
        };
        return this.http.post('http://localhost:3000/api/events/', eventData).map(function (response) { return response.json(); });
    };
    return AddEventService;
}());
AddEventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AddEventService);
exports.AddEventService = AddEventService;
//# sourceMappingURL=addevent.service.js.map
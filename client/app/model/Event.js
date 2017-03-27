"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = (function () {
    function Event(title, desc) {
        this.title = title;
        this.descr = desc;
    }
    Event.prototype.setCreated = function (crDate) {
        this.created = crDate;
    };
    Event.prototype.setModified = function (modDate) {
        this.modified = modDate;
    };
    Event.prototype.setPlace = function (pl) {
        this.place = pl;
    };
    Event.prototype.setFees = function (fs) {
        this.fees = fs;
    };
    Event.prototype.settask = function (tsk) {
        this.task = tsk;
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=Event.js.map
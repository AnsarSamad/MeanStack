"use strict";
class Event {
    constructor(title, desc) {
        this.title = title;
        this.descr = desc;
    }
    setCreated(crDate) {
        this.created = crDate;
    }
    setModified(modDate) {
        this.modified = modDate;
    }
    setPlace(pl) {
        this.place = pl;
    }
    setFees(fs) {
        this.fees = fs;
    }
    settask(tsk) {
        this.task = tsk;
    }
}
exports.Event = Event;
//# sourceMappingURL=Event.js.map
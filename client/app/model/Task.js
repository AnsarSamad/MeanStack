"use strict";
var Task = (function () {
    function Task(title, done) {
        this.title = title;
        this.isDone = done;
    }
    Task.prototype.setContent = function (content) {
        this.content = content;
    };
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=Task.js.map
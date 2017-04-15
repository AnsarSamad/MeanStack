"use strict";
var member_1 = require("./member");
var ComponentAction = (function () {
    function ComponentAction() {
    }
    ComponentAction.prototype.setMember = function (member) {
        ComponentAction.member = member;
    };
    ComponentAction.prototype.getMember = function () {
        if (member_1.Member == null) {
            return new member_1.Member("", "false");
        }
        return ComponentAction.member;
    };
    return ComponentAction;
}());
exports.ComponentAction = ComponentAction;
//# sourceMappingURL=Component.action.js.map
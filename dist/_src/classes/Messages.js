"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Messages = /** @class */ (function () {
    function Messages(desc, details) {
        this.id = uuid_1.v4();
        this.description = desc;
        this.details = details;
    }
    Messages.prototype.getId = function () {
        return this.id;
    };
    Messages.prototype.getDescription = function () {
        return this.description;
    };
    Messages.prototype.getDetails = function () {
        return this.details;
    };
    Messages.prototype.updateMessage = function (desc, details) {
        this.description = desc;
        this.details = details;
        return this;
    };
    return Messages;
}());
exports.default = Messages;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Messages_1 = __importDefault(require("./Messages"));
var User = /** @class */ (function () {
    function User(user, password, repeatPass) {
        this.id = uuid_1.v4();
        this.user = user;
        this.password = password;
        this.repeatPass = repeatPass;
        this.messages = [];
    }
    User.prototype.getUser = function () {
        return this.user;
    };
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getAllMessages = function () {
        return this.messages;
    };
    User.prototype.setMessages = function (desc, details) {
        var msg = new Messages_1.default(desc, details);
        this.messages.push(msg);
        return this.messages[this.messages.length - 1];
    };
    User.prototype.updateMessages = function (messages) {
        this.messages = messages || [];
    };
    return User;
}());
exports.default = User;

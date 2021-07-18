"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MessagesController_1 = __importDefault(require("../controllers/MessagesController"));
var MessagesRoutes = /** @class */ (function () {
    function MessagesRoutes() {
    }
    MessagesRoutes.prototype.init = function () {
        var routes = express_1.Router();
        var controller = new MessagesController_1.default();
        routes.get('/messages', controller.index);
        routes.post('/messages/:id', controller.store);
        routes.get('/messages/:id', controller.show);
        routes.get('/messages/users/:id', controller.getAll);
        routes.put('/messages/:id', controller.update);
        routes.delete('/messages/:id', controller.delete);
        return routes;
    };
    return MessagesRoutes;
}());
exports.default = MessagesRoutes;

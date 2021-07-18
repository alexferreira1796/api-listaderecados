"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
var UsersRoutes = /** @class */ (function () {
    function UsersRoutes() {
    }
    UsersRoutes.prototype.init = function () {
        var routes = express_1.Router();
        var controller = new UserController_1.default();
        routes.get('/users', controller.index);
        routes.post('/users', controller.store);
        routes.get('/users/:id', controller.index);
        routes.get('/users/:id', controller.show);
        routes.put('/uses/:id', controller.update);
        routes.delete('/users/:id', controller.delete);
        return routes;
    };
    return UsersRoutes;
}());
exports.default = UsersRoutes;

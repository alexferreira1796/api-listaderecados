"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
function validUser(req, res, next) {
    var _a = req.params, id = _a.id, name = _a.name;
    var hasUser;
    if (id) {
        hasUser = data_1.users.find(function (item) { return item.getId() === id; });
    }
    if (name) {
        hasUser = data_1.users.find(function (item) { return item.getUser() === name; });
    }
    if (!hasUser) {
        return res.status(400).json({
            success: false,
            msg: 'User not found',
            data: null,
        });
    }
    req.body.data = hasUser;
    next();
}
exports.default = validUser;

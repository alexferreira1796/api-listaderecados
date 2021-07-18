"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
function validName(req, res, next) {
    var name = req.body.name;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Please, enter the name',
            data: null
        });
    }
    if (name.trim().length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Minimum characters are three',
            data: null
        });
    }
    var hasUser = data_1.users.find(function (item) { return item.getUser() === name; });
    if (hasUser) {
        return res.status(400).json({
            success: false,
            msg: 'User exists',
            data: null
        });
    }
    next();
}
exports.default = validName;

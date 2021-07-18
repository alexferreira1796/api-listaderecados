"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
function validMessage(req, res, next) {
    var _a = req.params, id = _a.id, idMessage = _a.idMessage;
    var hasUser = data_1.users.find(function (item) { return item.getId() === id; });
    if (hasUser) {
        var allMessages = hasUser.getAllMessages();
        var message = allMessages.find(function (item) { return item.getId() === idMessage; });
        if (!message) {
            return res.status(400).json({
                success: false,
                msg: 'message not found',
                data: null
            });
        }
        req.body.data = message;
    }
    else {
        return res.status(400).json({
            success: false,
            msg: 'user not found',
            data: null
        });
    }
    next();
}
exports.default = validMessage;

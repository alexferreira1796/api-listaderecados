"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function validId(req, res, next) {
    var _a = req.params, id = _a.id, idMessage = _a.idMessage;
    if (id && !uuid_1.validate(id)) {
        return res.status(400).json({
            success: false,
            msg: 'ID not validate',
            data: null
        });
    }
    if (idMessage && !uuid_1.validate(idMessage)) {
        return res.status(400).json({
            success: false,
            msg: 'ID Message not validate',
            data: null
        });
    }
    next();
}
exports.default = validId;

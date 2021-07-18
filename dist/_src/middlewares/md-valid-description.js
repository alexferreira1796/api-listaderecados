"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validDescription(req, res, next) {
    var description = req.body.description;
    if (!description) {
        return res.status(400).json({
            success: false,
            message: 'Please, enter description',
            data: null
        });
    }
    next();
}
exports.default = validDescription;

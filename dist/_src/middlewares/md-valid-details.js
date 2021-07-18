"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validDetails(req, res, next) {
    var details = req.body.details;
    if (!details) {
        return res.status(400).json({
            success: false,
            message: 'Please, enter details',
            data: null
        });
    }
    next();
}
exports.default = validDetails;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validPassword(req, res, next) {
    var _a = req.body, password = _a.password, repeatPass = _a.repeatPass;
    if (!password) {
        return res.status(400).json({
            success: false,
            message: 'Please, enter the password',
            data: null
        });
    }
    if (password.trim().length < 8) {
        return res.status(400).json({
            success: false,
            message: 'Minimum characters are eight',
            data: null
        });
    }
    if (!repeatPass) {
        return res.status(400).json({
            success: false,
            message: 'Please, enter the password again',
            data: null
        });
    }
    if (repeatPass.trim().length < 8) {
        return res.status(400).json({
            success: false,
            message: 'Minimum characters are eight',
            data: null
        });
    }
    if (password !== repeatPass) {
        return res.status(400).json({
            success: false,
            message: 'Passwords do not match',
            data: null
        });
    }
    next();
}
exports.default = validPassword;

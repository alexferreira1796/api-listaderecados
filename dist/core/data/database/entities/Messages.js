"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
var typeorm_1 = require("typeorm");
var Users_1 = require("./Users");
var Messages = /** @class */ (function (_super) {
    __extends(Messages, _super);
    function Messages(desc, details, id) {
        var _this = _super.call(this) || this;
        _this.description = desc;
        _this.details = details;
        _this.idUser = id;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({
            name: 'id',
            type: 'int'
        }),
        __metadata("design:type", Number)
    ], Messages.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'description'
        }),
        __metadata("design:type", String)
    ], Messages.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'details'
        }),
        __metadata("design:type", String)
    ], Messages.prototype, "details", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'id_user'
        }),
        __metadata("design:type", String)
    ], Messages.prototype, "idUser", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Users_1.Users; }, function (user) { return user.message; }),
        typeorm_1.JoinColumn({ name: 'id_user', referencedColumnName: "id" }),
        __metadata("design:type", Users_1.Users)
    ], Messages.prototype, "user", void 0);
    Messages = __decorate([
        typeorm_1.Entity({ name: 'tb_messages' }),
        __metadata("design:paramtypes", [String, String, String])
    ], Messages);
    return Messages;
}(typeorm_1.BaseEntity));
exports.Messages = Messages;
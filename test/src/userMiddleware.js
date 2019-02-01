"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
let UserMiddleware = class UserMiddleware extends appolo_1.Middleware {
    run(req, res, next) {
        req.user = "user";
        this.context.user = req.query.userName;
        next();
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], UserMiddleware.prototype, "context", void 0);
UserMiddleware = tslib_1.__decorate([
    appolo_1.define()
], UserMiddleware);
exports.UserMiddleware = UserMiddleware;
//# sourceMappingURL=userMiddleware.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const route_1 = require("@appolo/route");
const utils_1 = require("@appolo/utils");
let UserMiddleware = class UserMiddleware extends route_1.Middleware {
    async run(req, res, next) {
        await utils_1.Promises.delay(utils_1.Numbers.random(3));
        req.user = "user";
        this.context.user = req.query.userName;
        next();
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], UserMiddleware.prototype, "context", void 0);
UserMiddleware = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], UserMiddleware);
exports.UserMiddleware = UserMiddleware;
//# sourceMappingURL=userMiddleware.js.map
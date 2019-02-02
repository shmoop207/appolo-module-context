"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const _ = require("lodash");
const Q = require("bluebird");
const index_1 = require("appolo/index");
let UserMiddleware = class UserMiddleware extends appolo_1.Middleware {
    async run(req, res, next) {
        await Q.delay(_.random(3));
        req.user = "user";
        this.context.user = req.query.userName;
        next();
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], UserMiddleware.prototype, "context", void 0);
UserMiddleware = tslib_1.__decorate([
    appolo_1.define(),
    index_1.singleton()
], UserMiddleware);
exports.UserMiddleware = UserMiddleware;
//# sourceMappingURL=userMiddleware.js.map
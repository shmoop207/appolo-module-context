"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const userMiddleware_1 = require("../userMiddleware");
let ContextController = class ContextController extends route_1.Controller {
    async test(req, res) {
        let userName = await this.manager.getContextName();
        res.json({ userName });
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], ContextController.prototype, "manager", void 0);
tslib_1.__decorate([
    (0, route_1.get)("/test/context/"),
    (0, route_1.middleware)(userMiddleware_1.UserMiddleware)
], ContextController.prototype, "test", null);
ContextController = tslib_1.__decorate([
    (0, route_1.controller)()
], ContextController);
exports.ContextController = ContextController;
//# sourceMappingURL=contextController.js.map
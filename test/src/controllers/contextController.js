"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const userMiddleware_1 = require("../userMiddleware");
let ContextController = class ContextController extends appolo_1.Controller {
    async test(req, res) {
        let userName = await this.manager.getContextName();
        res.json({ userName });
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], ContextController.prototype, "manager", void 0);
tslib_1.__decorate([
    appolo_1.get("/test/context/"),
    appolo_1.middleware(userMiddleware_1.UserMiddleware)
], ContextController.prototype, "test", null);
ContextController = tslib_1.__decorate([
    appolo_1.controller()
], ContextController);
exports.ContextController = ContextController;
//# sourceMappingURL=contextController.js.map
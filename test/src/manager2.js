"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
let Manager2 = class Manager2 {
    get name() {
        return this.constructor.name;
    }
    async getContextName() {
        let ctx = this.context;
        ctx.user = "Manager2";
        let name = await this.manager.getContextName();
        return name;
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], Manager2.prototype, "context", void 0);
tslib_1.__decorate([
    appolo_1.inject()
], Manager2.prototype, "manager", void 0);
Manager2 = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], Manager2);
exports.Manager2 = Manager2;
//# sourceMappingURL=manager2.js.map
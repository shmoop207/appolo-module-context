"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Q = require("bluebird");
const appolo_1 = require("appolo");
let Manager = class Manager {
    get name() {
        return this.constructor.name;
    }
    async getContextName() {
        Q.delay(1);
        return this.context.user;
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], Manager.prototype, "context", void 0);
Manager = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], Manager);
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map
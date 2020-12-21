"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const tslib_1 = require("tslib");
const Q = require("bluebird");
const _ = require("lodash");
const inject_1 = require("@appolo/inject");
let Manager = class Manager {
    get name() {
        return this.constructor.name;
    }
    async getContextName() {
        await Q.delay(_.random(3));
        return this.context.user;
    }
};
tslib_1.__decorate([
    inject_1.inject()
], Manager.prototype, "context", void 0);
Manager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], Manager);
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map
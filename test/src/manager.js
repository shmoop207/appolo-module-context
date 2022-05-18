"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
let Manager = class Manager {
    get name() {
        return this.constructor.name;
    }
    async getContextName() {
        await utils_1.Promises.delay(utils_1.Numbers.random(3));
        return this.context.user;
    }
    async getContextNameHandler() {
        await utils_1.Promises.delay(utils_1.Numbers.random(3));
        return this.context.user = this.context.user + "bbb";
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], Manager.prototype, "context", void 0);
Manager = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], Manager);
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map
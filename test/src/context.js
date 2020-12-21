"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyContext = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const __1 = require("../../");
let MyContext = class MyContext {
    constructor(req, res) {
    }
    set user(value) {
        this._user = value;
    }
    get user() {
        return this._user;
    }
};
tslib_1.__decorate([
    inject_1.lazy()
], MyContext.prototype, "manager", void 0);
tslib_1.__decorate([
    inject_1.lazy()
], MyContext.prototype, "env", void 0);
MyContext = tslib_1.__decorate([
    __1.context()
], MyContext);
exports.MyContext = MyContext;
//# sourceMappingURL=context.js.map
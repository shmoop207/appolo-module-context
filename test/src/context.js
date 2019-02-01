"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("appolo/index");
const __1 = require("../../");
let MyContext = class MyContext extends __1.Context {
    set user(value) {
        console.log(this.env.name);
        this._user = value;
    }
    get user() {
        return this._user;
    }
};
tslib_1.__decorate([
    index_1.injectLazy()
], MyContext.prototype, "manager", void 0);
tslib_1.__decorate([
    index_1.injectLazy()
], MyContext.prototype, "env", void 0);
MyContext = tslib_1.__decorate([
    index_1.define(),
    __1.context()
], MyContext);
exports.MyContext = MyContext;
//# sourceMappingURL=context.js.map
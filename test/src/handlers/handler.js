"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const contextScopePipeline_1 = require("../../../module/src/contextScopePipeline");
let Handler = class Handler {
    async handle(name) {
        this.context.user = name;
        let userName = await this.manager.getContextNameHandler();
        return userName;
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], Handler.prototype, "manager", void 0);
tslib_1.__decorate([
    (0, inject_1.inject)()
], Handler.prototype, "context", void 0);
tslib_1.__decorate([
    (0, contextScopePipeline_1.contextScope)()
], Handler.prototype, "handle", null);
Handler = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], Handler);
exports.Handler = Handler;
//# sourceMappingURL=handler.js.map
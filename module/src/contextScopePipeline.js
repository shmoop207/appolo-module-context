"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextScope = exports.ContextScopePipeline = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const inject_1 = require("@appolo/inject");
const appolo_context_1 = require("appolo-context");
const contextModule_1 = require("../contextModule");
const decorators_1 = require("./decorators");
let ContextScopePipeline = class ContextScopePipeline {
    initialize() {
        this._ctx = appolo_context_1.namespace.get(contextModule_1.RequestNameSpaceSymbol);
        this._contextClass = this.app.tree.parent.discovery.findReflectData(decorators_1.ContextClassSymbol);
    }
    run(context, next) {
        if (this._contextClass) {
            return this._ctx.scope(() => {
                let contextObj = this.injector.get(this._contextClass.define.definition.id);
                this._ctx.set(contextModule_1.RequestContextSymbol, contextObj);
                return next();
            });
        }
        else {
            return this._ctx.scope(() => {
                return next();
            });
        }
    }
};
tslib_1.__decorate([
    (0, inject_1.inject)()
], ContextScopePipeline.prototype, "injector", void 0);
tslib_1.__decorate([
    (0, inject_1.inject)()
], ContextScopePipeline.prototype, "app", void 0);
tslib_1.__decorate([
    (0, inject_1.init)()
], ContextScopePipeline.prototype, "initialize", null);
ContextScopePipeline = tslib_1.__decorate([
    (0, inject_1.define)(),
    (0, inject_1.singleton)()
], ContextScopePipeline);
exports.ContextScopePipeline = ContextScopePipeline;
const contextScope = (params) => (0, engine_1.pipeline)(ContextScopePipeline, params);
exports.contextScope = contextScope;
//# sourceMappingURL=contextScopePipeline.js.map
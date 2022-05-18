"use strict";
var ContextModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextModule = exports.RequestContextSymbol = exports.RequestNameSpaceSymbol = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const decorators_1 = require("./src/decorators");
const index_1 = require("appolo-context/index");
const contextScopePipeline_1 = require("./src/contextScopePipeline");
exports.RequestNameSpaceSymbol = "@__RequestNameSpaceSymbol__";
exports.RequestContextSymbol = "@__requestContext__";
let ContextModule = ContextModule_1 = class ContextModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            id: "context"
        };
    }
    get exports() {
        return [contextScopePipeline_1.ContextScopePipeline];
    }
    static for(options) {
        return { type: ContextModule_1, options };
    }
    beforeModuleInitialize() {
        let context = index_1.namespace.create(exports.RequestNameSpaceSymbol);
        let contextClass = this.app.tree.parent.discovery.findReflectData(decorators_1.ContextClassSymbol);
        if (contextClass) {
            let $injector = this.app.tree.parent.injector;
            this.app.tree.parent.injector.addDefinition(this.moduleOptions.id, {
                lazyFn: function () {
                    let ctx = context.get(exports.RequestContextSymbol);
                    if (ctx) {
                        return ctx;
                    }
                    return context.scope(() => {
                        let contextObj = $injector.get(contextClass.define.definition.id, []);
                        context.set(exports.RequestContextSymbol, contextObj);
                        return context.get(exports.RequestContextSymbol);
                    });
                }
            });
            this.app.tree.parent.route.use((req, res, next) => context.scope(() => {
                let contextObj = req.app.injector.get(contextClass.define.definition.id, [req, res]);
                context.set(exports.RequestContextSymbol, contextObj);
                next();
            }));
        }
        else {
            this.app.tree.parent.injector.addDefinition(this.moduleOptions.id, {
                lazyFn: function () {
                    return context;
                }
            });
            this.app.tree.parent.route.use((req, res, next) => context.scope(next));
        }
        context.initialize();
        this.app.event.beforeReset.on(() => index_1.namespace.delete(exports.RequestNameSpaceSymbol));
    }
};
ContextModule = ContextModule_1 = tslib_1.__decorate([
    (0, engine_1.module)()
], ContextModule);
exports.ContextModule = ContextModule;
//# sourceMappingURL=contextModule.js.map
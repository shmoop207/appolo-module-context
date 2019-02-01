"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("appolo/index");
const decorators_1 = require("./src/decorators");
const index_2 = require("appolo-context/index");
exports.RequestNameSpaceSymbol = Symbol("requestNameSpaceSymbol");
exports.RequestContextSymbol = Symbol("requestContext");
let ContextModule = class ContextModule extends index_1.Module {
    constructor(opts) {
        super(opts);
        this.Defaults = {
            id: "context"
        };
    }
    beforeInitialize() {
        let context = index_2.namespace.create(exports.RequestNameSpaceSymbol);
        let contextClass = index_1.Util.findReflectData(decorators_1.ContextClassSymbol, this.app.parent.exported);
        if (contextClass) {
            this.app.parent.injector.addDefinition(this.moduleOptions.id, {
                lazyFn: function () {
                    return context.get(exports.RequestContextSymbol);
                }
            });
            this.app.parent.use((req, res, next) => context.scope(() => {
                let contextObj = req.app.injector.get(contextClass.define.definition.id);
                context.set(exports.RequestContextSymbol, contextObj);
                next();
            }));
        }
        else {
            this.app.parent.use((req, res, next) => context.scope(next));
        }
        context.initialize();
        this.app.on(index_1.Events.BeforeReset, () => index_2.namespace.delete(exports.RequestNameSpaceSymbol));
    }
};
ContextModule = tslib_1.__decorate([
    index_1.module()
], ContextModule);
exports.ContextModule = ContextModule;
//# sourceMappingURL=contextModule.js.map
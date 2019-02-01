"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contextModule_1 = require("./module/contextModule");
exports.ContextModule = contextModule_1.ContextModule;
const decorators_1 = require("./module/src/decorators");
exports.context = decorators_1.context;
const appolo_context_1 = require("appolo-context");
exports.Context = appolo_context_1.Context;
function getContext() {
    return appolo_context_1.namespace.get(contextModule_1.RequestNameSpaceSymbol).get(contextModule_1.RequestContextSymbol);
}
exports.getContext = getContext;
//# sourceMappingURL=index.js.map
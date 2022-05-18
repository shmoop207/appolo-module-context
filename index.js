"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContext = exports.contextScope = exports.Context = exports.context = exports.ContextModule = void 0;
const contextModule_1 = require("./module/contextModule");
Object.defineProperty(exports, "ContextModule", { enumerable: true, get: function () { return contextModule_1.ContextModule; } });
const decorators_1 = require("./module/src/decorators");
Object.defineProperty(exports, "context", { enumerable: true, get: function () { return decorators_1.context; } });
const contextScopePipeline_1 = require("./module/src/contextScopePipeline");
Object.defineProperty(exports, "contextScope", { enumerable: true, get: function () { return contextScopePipeline_1.contextScope; } });
const appolo_context_1 = require("appolo-context");
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return appolo_context_1.Context; } });
function getContext() {
    return appolo_context_1.namespace.get(contextModule_1.RequestNameSpaceSymbol).get(contextModule_1.RequestContextSymbol);
}
exports.getContext = getContext;
//# sourceMappingURL=index.js.map
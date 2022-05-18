"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = exports.ContextClassSymbol = void 0;
require("reflect-metadata");
const inject_1 = require("@appolo/inject");
exports.ContextClassSymbol = "@__ContextClass__";
function context() {
    return function (target) {
        (0, inject_1.define)()(target);
        inject_1.Util.getReflectData(exports.ContextClassSymbol, target, true);
    };
}
exports.context = context;
//# sourceMappingURL=decorators.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const appolo_1 = require("appolo");
exports.ContextClassSymbol = Symbol("contextClass");
function context() {
    return function (target) {
        appolo_1.Util.getReflectData(exports.ContextClassSymbol, target, true);
    };
}
exports.context = context;
//# sourceMappingURL=decorators.js.map
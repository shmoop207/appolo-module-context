"use strict";
import {ContextModule, RequestContextSymbol, RequestNameSpaceSymbol} from "./module/contextModule";
import {context} from "./module/src/decorators"
import {contextScope} from "./module/src/contextScopePipeline"
import {Context,namespace} from "appolo-context";

export interface IOptions {

    id: string
}

export {ContextModule, context, Context,contextScope}

export function getContext<T>():T {
    return namespace.get(RequestNameSpaceSymbol).get<T>(RequestContextSymbol)
}

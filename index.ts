"use strict";
import {ContextModule, RequestContextSymbol, RequestNameSpaceSymbol} from "./module/contextModule";
import {context} from "./module/src/decorators"
import {Context,namespace} from "appolo-context";

export interface IOptions {

    id: string
}

export {ContextModule, context, Context}

export function getContext<T>():T {
    return namespace.get(RequestNameSpaceSymbol).get<T>(RequestContextSymbol)
}

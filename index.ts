"use strict";
import {ContextModule, RequestContextSymbol, RequestNameSpaceSymbol} from "./module/contextModule";
import {IModuleOptions} from "appolo";
import {context} from "./module/src/decorators"
import {Context,namespace} from "appolo-context";

export interface IOptions extends IModuleOptions {

    id: string
}

export {ContextModule, context, Context}

export function getContext<T>():T {
    return namespace.get(RequestNameSpaceSymbol).get<T>(RequestContextSymbol)
}

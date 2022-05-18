import {exception, IPipeline, pipeline, PipelineContext, App} from '@appolo/engine';
import {define, singleton, inject, Injector, init} from '@appolo/inject';
import {namespace} from "appolo-context";
import {RequestContextSymbol, RequestNameSpaceSymbol} from "../contextModule";
import {ContextClassSymbol} from "./decorators";
import {Context} from "appolo-context/lib/context";

interface IParams {
    msgFn?: (...args: any[]) => string,
    paramsFn?: (...args: any[]) => { [index: string]: any }
}

@define()
@singleton()
export class ContextScopePipeline implements IPipeline {

    @inject() injector: Injector
    @inject() app: App;

    private _ctx: Context
    private _contextClass

    @init()
    private initialize() {
        this._ctx = namespace.get(RequestNameSpaceSymbol);
        this._contextClass = this.app.tree.parent.discovery.findReflectData(ContextClassSymbol);

    }

    public run(context: PipelineContext, next: () => Promise<any>) {

        if (this._contextClass) {
            return this._ctx.scope(() => {
                let contextObj = this.injector.get(this._contextClass.define.definition.id);
                this._ctx.set(RequestContextSymbol, contextObj);
                return next()
            })
        } else {
            return this._ctx.scope(() => {
                return next()
            })
        }


    }
}

export const contextScope = (params?: IParams) => pipeline(ContextScopePipeline, params);

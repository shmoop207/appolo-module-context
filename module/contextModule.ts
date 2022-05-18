import {IRequest, IResponse, NextFn} from "@appolo/route";
import {Events, Module, module, IModuleParams} from "@appolo/engine";
import {App} from "@appolo/core";
import {IOptions} from "../index";
import {ContextClassSymbol} from "./src/decorators";
import {namespace} from "appolo-context/index";
import {ContextScopePipeline} from "./src/contextScopePipeline";

export const RequestNameSpaceSymbol = "@__RequestNameSpaceSymbol__";
export const RequestContextSymbol = "@__requestContext__";

@module()
export class ContextModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = {
        id: "context"
    };

    public get exports() {
        return [ContextScopePipeline]
    }

    public static for(options?: IOptions): IModuleParams {
        return {type: ContextModule, options};
    }

    public beforeModuleInitialize() {

        let context = namespace.create(RequestNameSpaceSymbol);

        let contextClass = this.app.tree.parent.discovery.findReflectData(ContextClassSymbol);

        if (contextClass) {

            let $injector = this.app.tree.parent.injector;

            this.app.tree.parent.injector.addDefinition(this.moduleOptions.id, {
                lazyFn: function () {
                    let ctx = context.get(RequestContextSymbol);

                    if (ctx) {
                        return ctx;
                    }

                    return context.scope(() => {
                        let contextObj = $injector.get(contextClass.define.definition.id, []);
                        context.set(RequestContextSymbol, contextObj);

                        return context.get(RequestContextSymbol);
                    })
                }

            });

            (this.app.tree.parent as App).route.use((req: IRequest, res: IResponse, next: NextFn) => context.scope(() => {
                let contextObj = req.app.injector.get(contextClass.define.definition.id, [req, res]);
                context.set(RequestContextSymbol, contextObj);
                next()
            }))
        } else {

            this.app.tree.parent.injector.addDefinition(this.moduleOptions.id, {
                lazyFn: function () {
                    return context
                }
            });

            (this.app.tree.parent as App).route.use((req: IRequest, res: IResponse, next: NextFn) => context.scope(next))
        }

        context.initialize();


        this.app.event.beforeReset.on(() => namespace.delete(RequestNameSpaceSymbol));

    }
}

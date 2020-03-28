import {App, Events, IRequest, IResponse, Module, module, NextFn, Util} from "appolo/index";
import {IOptions} from "../index";
import {ContextClassSymbol} from "./src/decorators";
import {namespace} from "appolo-context/index";

export const RequestNameSpaceSymbol = "@__RequestNameSpaceSymbol__";
export const RequestContextSymbol = "@__requestContext__";


@module()
export class ContextModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = {
        id: "context"
    };

    constructor(opts?: IOptions) {
        super(opts);
    }

    public static for(opts?: IOptions): ContextModule {
        return new ContextModule(opts);
    }

    public beforeInitialize() {

        let context = namespace.create(RequestNameSpaceSymbol);

        let contextClass = Util.findReflectData(ContextClassSymbol, this.app.parent.exported);


        if (contextClass) {

            let $injector = this.app.parent.injector;

            this.app.parent.injector.addDefinition(this.moduleOptions.id, {
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

            (this.app.parent as App).use((req: IRequest, res: IResponse, next: NextFn) => context.scope(() => {
                let contextObj = req.app.injector.get(contextClass.define.definition.id, [req, res]);
                context.set(RequestContextSymbol, contextObj);
                next()
            }))
        } else {

            this.app.parent.injector.addDefinition(this.moduleOptions.id, {
                lazyFn: function () {
                    return context
                }
            });

            (this.app.parent as App).use((req: IRequest, res: IResponse, next: NextFn) => context.scope(next))
        }

        context.initialize();


        this.app.on(Events.BeforeReset, () => namespace.delete(RequestNameSpaceSymbol))

    }
}

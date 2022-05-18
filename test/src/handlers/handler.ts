import {define, inject, singleton} from "@appolo/inject"
import {Manager} from "../manager";
import {MyContext} from "../context";
import {contextScope} from "../../../module/src/contextScopePipeline";

@define()
@singleton()
export class Handler {
    @inject() manager: Manager;
    @inject() context: MyContext;

    @contextScope()
    public async handle(name:string) {

        this.context.user = name

        let userName = await this.manager.getContextNameHandler()

        return userName

    }
}

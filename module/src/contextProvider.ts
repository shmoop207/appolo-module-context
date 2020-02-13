import {define,singleton,App,inject} from "appolo"
import {Util} from "appolo/index";
import {ContextClassSymbol} from "./decorators";

@define()
@singleton()
export class ContextProvider {
    @inject() private  app:App;

    public createScope(){
        let contextClass = Util.findReflectData(ContextClassSymbol, this.app.parent.exported);

    }
}

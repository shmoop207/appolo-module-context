"use strict";
import * as Q from "bluebird";
import {define, singleton, inject} from 'appolo';
import {MyContext} from "./context";

@define()
@singleton()
export class Manager {

    @inject() context: MyContext ;

    public get name(): string {
        return this.constructor.name
    }

    public async getContextName():Promise<string>{
        Q.delay(1);
        return this.context.user
    }
}


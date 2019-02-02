"use strict";
import * as Q from "bluebird";
import * as _ from "lodash";
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
       await Q.delay(_.random(3));
        return this.context.user;
    }
}


"use strict";

import {define, singleton, inject} from '@appolo/inject';
import {MyContext} from "./context";
import {Manager} from "./manager";

@define()
@singleton()
export class Manager2 {

    @inject() context: MyContext;
    @inject() manager: Manager;

    public get name(): string {
        return this.constructor.name
    }

    public async getContextName(): Promise<string> {

        let ctx = this.context;

        ctx.user = "Manager2";

        let name =  await this.manager.getContextName();

        return name;
    }

}


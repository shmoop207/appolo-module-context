"use strict";
import {define, singleton, inject} from '@appolo/inject';
import {MyContext} from "./context";
import {Promises, Numbers} from "@appolo/utils";

@define()
@singleton()
export class Manager {

    @inject() context: MyContext;

    public get name(): string {
        return this.constructor.name
    }

    public async getContextName(): Promise<string> {
        await Promises.delay(Numbers.random(3));
        return this.context.user;
    }

    public async getContextNameHandler(): Promise<string> {
        await Promises.delay(Numbers.random(3));
        return this.context.user = this.context.user + "bbb";
    }

}


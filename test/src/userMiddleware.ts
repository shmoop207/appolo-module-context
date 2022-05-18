"use strict";
import {define, inject, singleton} from '@appolo/inject';
import {MyContext} from "./context";
import {Middleware} from "@appolo/route";
import {Promises,Numbers} from "@appolo/utils";


@define()
@singleton()
export class UserMiddleware extends Middleware {
    @inject() context: MyContext;

    async run(req, res, next) {
        await Promises.delay(Numbers.random(3));

        req.user = "user";
        this.context.user = req.query.userName;
        next()
    }
}

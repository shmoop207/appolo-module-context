"use strict";
import {define, inject, Middleware} from 'appolo';
import {MyContext} from "./context";


@define()
export class UserMiddleware extends Middleware {
    @inject() context: MyContext;

    run(req, res, next) {
        req.user = "user";
        this.context.user = req.query.userName;
        next()
    }
}

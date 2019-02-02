"use strict";
import {define, inject, Middleware} from 'appolo';
import {MyContext} from "./context";
import * as _ from "lodash";
import * as Q from "bluebird";
import {singleton} from "appolo/index";


@define()
@singleton()
export class UserMiddleware extends Middleware {
    @inject() context: MyContext;

    async run(req, res, next) {
        await Q.delay(_.random(3));

        req.user = "user";
        this.context.user = req.query.userName;
        next()
    }
}

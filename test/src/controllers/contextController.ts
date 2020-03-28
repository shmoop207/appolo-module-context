"use strict";
import {
    controller,
    Controller,
    get,
    inject,
    IRequest,
    IResponse, middleware,
} from 'appolo';
import {Manager} from "../manager";
import {UserMiddleware} from "../userMiddleware";

@controller()
export class ContextController extends Controller {

    @inject() manager: Manager;

    @get("/test/context/")
    @middleware(UserMiddleware)
    async test(req: IRequest, res: IResponse) {

        let userName = await this.manager.getContextName()

        res.json({userName})
    }


}




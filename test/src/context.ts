import {injectLazy} from "appolo/index";
import {context} from "../../";
import {Manager} from "./manager";

@context()
export class MyContext {

    @injectLazy() manager: Manager;
    @injectLazy() env: any;

    constructor(req, res) {

    }

    private _user: string;

    public set user(value: string) {

        this._user = value
    }

    public get user(): string {
        return this._user
    }

}
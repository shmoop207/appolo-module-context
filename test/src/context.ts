import {lazy} from "@appolo/inject";
import {context} from "../../";
import {Manager} from "./manager";

@context()
export class MyContext {

    @lazy() manager: Manager;
    @lazy() env: any;

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

import {define,injectLazy} from "appolo/index";
import {context, Context} from "../../";
import {Manager} from "./manager";

@define()
@context()
export class MyContext extends Context {

    @injectLazy() manager:Manager;
    @injectLazy() env:any;

    private _user:string;

    public set user(value: string) {

         console.log(this.env.name);

       this._user =  value
    }

    public get user(): string {
        return this._user
    }

}
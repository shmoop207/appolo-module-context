import "reflect-metadata";
import {Util,define} from 'appolo';

export const ContextClassSymbol = Symbol("contextClass");


export function context() {
    return function (target: any) {

        define()(target)
        Util.getReflectData<true>(ContextClassSymbol, target, true);

    }
}




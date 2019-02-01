import "reflect-metadata";
import {Util} from 'appolo';

export const ContextClassSymbol = Symbol("contextClass");


export function context() {
    return function (target: any) {

        Util.getReflectData<true>(ContextClassSymbol, target, true);

    }
}




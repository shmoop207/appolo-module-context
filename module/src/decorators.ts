import "reflect-metadata";
import {Util, define} from 'appolo';

export const ContextClassSymbol = "@__ContextClass__";


export function context() {
    return function (target: any) {

        define()(target);
        Util.getReflectData<true>(ContextClassSymbol, target, true);

    }
}




import { Request } from "@hapi/hapi";

export interface IOperations extends Request {
    payload: {
        intA: Number,
        intB: Number
    }

}



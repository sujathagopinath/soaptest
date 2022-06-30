import { Request, ResponseToolkit } from "@hapi/hapi";
import { IOperations } from "../interfaces";
import { aOp } from "../services";

const parseString = (result: any) => {
    return JSON.parse(JSON.stringify(result))
}

class arthimeticOperation {
    async Addition(request: IOperations, h: ResponseToolkit) {
        const client = await aOp.addData(request)
        return parseString(client[0])
    }

    async Subtraction(request: IOperations, h: ResponseToolkit) {
        const client = await aOp.subData(request)
        return parseString(client[0])

    }

    async Multiply(request: IOperations, h: ResponseToolkit) {
        const client = await aOp.mulData(request)
        return parseString(client[0])        
    }

    async Divide(request: IOperations, h: ResponseToolkit) {
        const client = await aOp.divData(request)
        return parseString(client[0])
    }
    // async setPoints(request: Request, h: ResponseToolkit) {
    //     const client = await aOp.setEndpointsUrl()
    //     console.log(client)
    // }

}

export const Details = new arthimeticOperation();
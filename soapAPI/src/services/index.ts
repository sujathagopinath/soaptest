import soap from 'soap'
import { soapCall } from "../soap";
import { IOperations } from "../interfaces";
import { Config } from '../environmentvariables/config';

export class aOperationServices {
    client: soap.Client | any
    constructor() {
        (async () => {
            this.client = await soapCall
        })()
    }
    async addData(data: IOperations) {
        console.log(this.client)

        return await this.client.AddAsync(data.payload)
    }

    async subData(data: IOperations) {
        return await this.client.SubtractAsync(data.payload)
    }

    async mulData(data: IOperations) {
        return await this.client.MultiplyAsync(data.payload)
    }

    async divData(data: IOperations) {
        return await this.client.DivideAsync(data.payload)
    }
    async setEndpointsUrl() {
        return this.client.setEndpoint(Config.get('url').endpoint_url)
    }
}

export const aOp = new aOperationServices()
import { Request, ResponseToolkit } from "@hapi/hapi";
import { userRequest } from "../interfaces";
import { soapCall } from "../soap";

class personDetails {
    async getData(request: Request, h: ResponseToolkit) {
        const client = await soapCall;
        // const cornerPointdata = new Promise((resolve, reject) => {
        client.CornerPoints((err: any, data: any) => {
            if (err) console.log(err);
            console.log(data);
            return h.response(data);
        });
        // })
        return client;
    }

    async postData(request: userRequest, h: ResponseToolkit) {
        const client = await soapCall;
        client.GmlTimeSeries(request.payload, (err: any, data: any) => {
            if (err) console.log(err);
            console.log(data)
            return h.response(data).code(200)
        });
        return client;
    }
}

export const Details = new personDetails();

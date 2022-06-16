import { Request, ResponseToolkit } from "@hapi/hapi";
import { userRequest, LatLonListdataRequest } from "../interfaces";
import { soapCall } from "../soap";

class personDetails {
    async getData(request: Request, h: ResponseToolkit) {
        const client = await soapCall()
        return await client.CornerPointsAsync()
    }

    async postData(request: userRequest, h: ResponseToolkit) {
        const client = await soapCall()
        return await client.GmlTimeSeriesAsync(request.payload)
    }

    async ndfdgenByDayLatLonListData(request: LatLonListdataRequest, h: ResponseToolkit) {
        const client = await soapCall()
        return await client.NDFDgenByDayLatLonListAsync(request.payload)
    }
}

export const Details = new personDetails();

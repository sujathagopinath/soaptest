import { Request, ResponseToolkit } from "@hapi/hapi";
import { ITimeSeriesData, ILatLonListdataRequest } from "../interfaces";
import { soapCall } from "../soap";

class personDetails {
    async cornerPointData(request: Request, h: ResponseToolkit) {
        const client = await soapCall()
        return await client.cornerPointsAsync()
    }

    async timeSeriesData(request: ITimeSeriesData, h: ResponseToolkit) {
        const client = await soapCall()
        let data = await client.GmlTimeSeriesAsync(request.payload)
        const results = JSON.stringify(data)
        return results
    }

    async latLonListData(request: ILatLonListdataRequest, h: ResponseToolkit) {
        const client = await soapCall()
        let data = await (client.NDFDgenByDayLatLonListAsync(request.payload))
        const results = JSON.stringify(data)
        return results
    }
}

export const Details = new personDetails();
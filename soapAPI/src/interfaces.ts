import { Request } from "@hapi/hapi";

export interface ITimeSeriesData extends Request {
    payload: {
        listLatLon: String,
        startTime: Date,
        endTime: Date,
        compType: String,
        featureType: String,
        propertyName: String

    }
}
export interface ILatLonListdataRequest extends Request {
    payload: {
        listLatLon: String,
        startDate: Date,
        numDays: Number,
        Unit: String,
        format: String
    }
}


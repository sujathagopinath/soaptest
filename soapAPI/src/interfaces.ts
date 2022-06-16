import * as Hapi from '@hapi/hapi'

export interface userRequest extends Hapi.Request {
    payload: {
        listLatLon: String,
        startTime: Date,
        endTime: Date,
        compType: String,
        featureType: String,
        propertyName: String

    }
}

export interface LatLonListdataRequest extends Hapi.Request {
    payload: {
        listLatLon: String,
        startDate: Date,
        numDays: Number,
        Unit: String,
        format: String

    }
}


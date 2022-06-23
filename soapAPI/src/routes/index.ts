import { Details } from "../controllers/index"
import { errorValidation, LatLonListdataRequest, timeSeriesSchema } from "../validation"
export const Routes = [
    {
        method: 'GET',
        path: '/corner_points',
        handler: Details.cornerPointData
    },
    // {
    //     method: 'POST',
    //     path: '/time_series',
    //     handler: Details.timeSeriesData,
    //     config: {
    //         validate: {
    //             payload: timeSeriesSchema,
    //             failAction: errorValidation
    //         }
    //     }
    // },
    // {
    //     method: 'POST',
    //     path: '/Lat_list',
    //     handler: Details.latLonListData,
    //     config: {
    //         validate: {
    //             payload: LatLonListdataRequest,
    //             failAction: errorValidation
    //         }
    //     }
    // }
]
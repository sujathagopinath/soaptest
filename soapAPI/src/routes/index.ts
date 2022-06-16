import { Details } from "../controllers/index"
export const Routes = [
    {
        method: 'GET',
        path: '/getdata',
        handler: Details.getData
    },
    {
        method: 'POST',
        path: '/postdata',
        handler: Details.postData
    },
    {
        method: 'POST',
        path: '/LatlistData',
        handler: Details.ndfdgenByDayLatLonListData
    }
]
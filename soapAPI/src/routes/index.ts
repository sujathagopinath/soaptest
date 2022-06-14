import { Details } from "../controllers/index"
export const datas = [
    {
        method: 'GET',
        path: '/getdata',
        handler: Details.getdata
    },
    {
        method: 'POST',
        path: '/postdata',
        handler: Details.postdata
    }
]
import { Request, ResponseToolkit } from '@hapi/hapi'
import { userRequest } from '../interfaces'
import { soapcall } from '../soap'
class personDetails {

    async getdata(request: Request, h: ResponseToolkit) {
        const client = await soapcall
        const cornerPointdata = new Promise((resolve, reject) => {
            client.CornerPoints((err: any, data: any) => {
                if (err)
                    reject(err)
                const response = h.response(data);
                return resolve(response)
            })
        })
        return cornerPointdata
    }

    async postdata(request: userRequest, h: ResponseToolkit) {
        const client = await soapcall
        const gmlTimeSeries = new Promise((resolve, reject) => {
            client.GmlTimeSeries(request.payload, (err: any, data: any) => {
                console.log(request.payload)
                if (err)
                    reject(err)
                const res = h.response(data)
                return resolve(res)

            })
        })
        return gmlTimeSeries
    }
}

export const Details = new personDetails()
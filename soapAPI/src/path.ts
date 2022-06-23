import path from 'path'
import { soapCall } from './soap'


export class Path {
    static getWeatherWSDL(fileName: string, dirName: boolean | undefined): string {
        throw new Error('Method not implemented.')
    }
    public getWeatherWSDL(fileName: string, dirName?: boolean) {
        const wsdlPath = path.join(__dirname + '/../' + '/src/weather.wsdl')
        return wsdlPath
    }

}

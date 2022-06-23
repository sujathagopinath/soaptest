import * as soap from 'soap'
import { Path } from './path'
import path from 'path'
export const soapCall = () => {
    const soapClient = soap.createClientAsync(__dirname + '/../' + '/src/weather.wsdl');
    return soapClient
}

// export function soapCall(fileName: string, dirName?: boolean) {
//     return soap.createClientAsync(
//         path.getWeatherWSDL(fileName, dirName)
//     )
// }
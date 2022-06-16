import * as soap from 'soap'

export const soapCall = () => {
    const soapClient = soap.createClientAsync(__dirname + '/../' + '/src/weather.wsdl');
    return soapClient
}


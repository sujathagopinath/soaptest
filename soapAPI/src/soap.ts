import * as soap from 'soap'

export const soapCall = soap.createClientAsync(__dirname + '/../' + '/src/operations.wsdl')
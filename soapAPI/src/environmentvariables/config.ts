import convict from 'convict'

export const Config = convict({
    env: {
        doc: "The application environment.",
        format: ["development", "local", "test"],
        default: "local",
        env: "NODE_ENV"
    },

    hapi: {
        host: {
            doc: "hapi_host",
            format: String,
            default: 'localhost'
        },
        port: {
            doc: "hapi_port",
            format: Number,
            default: 1000
        }
    },
    url: {
        endpoint_url: {
            doc: 'setEndpointurl',
            format: String,
            default: 'https://localhost:8000/calculator.asmx',
        }

    }

});

var env = Config.get('env');
Config.loadFile('./src/environmentvariables/' + env + '.json');
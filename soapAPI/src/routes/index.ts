import { Details } from "../controllers/index"
import { errorValidation, operationValidate } from "../validation"
export const Routes = [
    {
        method: 'POST',
        path: '/add',
        handler: Details.Addition,
        config: {
            validate: {
                payload: operationValidate,
                failAction: errorValidation
            }
        }
    },
    {
        method: 'POST',
        path: '/sub',
        handler: Details.Subtraction,
        config: {
            validate: {
                payload: operationValidate,
                failAction: errorValidation
            }
        }
    },
    {
        method: 'POST',
        path: '/mul',
        handler: Details.Multiply,
        config: {
            validate: {
                payload: operationValidate,
                failAction: errorValidation
            }
        }
    },
    {
        method: 'POST',
        path: '/div',
        handler: Details.Divide,
        config: {
            validate: {
                payload: operationValidate,
                failAction: errorValidation
            }
        }
    },

]
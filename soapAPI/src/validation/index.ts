import { Request, ResponseToolkit } from "@hapi/hapi";
import Joi from "joi";

export const operationValidate = Joi.object({
    intA: Joi.number().required(),
    intB: Joi.number().required(),
});

export const errorValidation = (request: Request, h: ResponseToolkit, error: any) => {
    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
}
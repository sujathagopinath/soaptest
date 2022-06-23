import { Request, ResponseToolkit } from "@hapi/hapi";
import Joi from "joi";

export const timeSeriesSchema = Joi.object({
    listLatLon: Joi.string().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    compType: Joi.string().required(),
    featureType: Joi.string().required(),
    propertyName: Joi.string().required()
});

export const LatLonListdataRequest = Joi.object({
    listLatLon: Joi.string().required(),
    startDate: Joi.date().required(),
    numDays: Joi.number().required(),
    Unit: Joi.string().required(),
    format: Joi.string().required()
})

export const errorValidation = (request: Request, h: ResponseToolkit, error: any) => {
    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
}
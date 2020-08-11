import { Request, Response } from "express";
import db from "../database/connection";

export default class ModelController{
    async index (request: Request, response: Response){
        const client = await db('model').select('*');

        return response.json(client);
    }


    async create(request: Request, response: Response){
        const {name_model} = request.body;
        try {
            const insertedModel = await db('model').insert({
                name_model
            })
    
            return response.json(insertedModel);
        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error while creating new model'
            })
        }
        
    }

}
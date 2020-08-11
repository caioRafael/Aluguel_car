import { Request, Response } from "express";
import db from "../database/connection";

export default class SessionController{

    async create(request: Request, response: Response){
        const {id, password} = request.body;
        
        try {
            const client = await db('client')
            .where({
                id: id,
                password: password
            })
            .select('name')
            .first();

            return response.json(client);
        } catch (err) {
            return response.status(400).json({
                error: 'could not possible to create the new session'
            })
        }
    }

}
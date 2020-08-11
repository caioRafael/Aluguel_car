import { Request, Response } from "express";
import db from "../database/connection";

export default class ProfileController{

    async index(request: Request, response:Response){
        const client_id = request.headers.authorization;            
        
        const clientRents = await db('rent')
            .where('client_id', client_id)
            .join('client', 'client.id', '=', 'rent.client_id')
            .join('car', 'car.id', '=', 'rent.car_id')
            .join('model', 'model.id', '=', 'car.id_model')
            .select([
                'rent.*',
                'client.name',
                'model.name_model',
                'car.year',
                'car.daily_cost'
            ]);

        return response.json(clientRents);
    }

}
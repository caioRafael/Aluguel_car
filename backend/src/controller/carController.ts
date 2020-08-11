import { Request, Response } from "express";
import db from "../database/connection";

export default class CarController{

    async index (request: Request, response: Response){
        const car = await db('car')
            .join('model', 'model.id', '=', 'car.id_model')
            .select([
                'car.*',
                'model.name_model'
            ]);
        
        return response.json(car);
    }

    async create (request: Request, response: Response){
        const {
            place,
            year,
            color,
            daily_cost,
            id_model
        } = request.body;
        try {
           
            const insertedCar = await db('car').insert({
                place,
                year,
                color,
                daily_cost,
                id_model
            })

            response.json(insertedCar);
        }catch(err){
            return response.status(400).json({
                error: 'Unexpected error while creating new car'
            })
        }
    }

    async delete(request:Request, response:Response){
        const {id} = request.params;

        try {
            await db('car').where('id', id).delete();

            return response.json({message: 'car deleted'});
        } catch (err) {
            return response.status(400).json({
                error: 'can not possible to delete thet car'
            })
        }
        
    }
};
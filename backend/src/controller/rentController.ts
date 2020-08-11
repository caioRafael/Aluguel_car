import { Request, Response } from "express";
import db from "../database/connection";
import convertDateToDays from "../utils/convertDateToDays";
import calculateValue from "../utils/calculateValue";

export default class RentController{

    async index(request: Request, response: Response){
        /**
         * estou importando a diaria do veículo para poder alterar o valor do aluguel
         * caso o clinte queira estender ou reduzir o periodo do aluguel
         */
        const listRent = await db('rent')
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

        return response.json(listRent);

    }
    
    async create(request: Request, response:Response){
        const {car_id, cost} = request.params;
        const client_id = request.headers.authorization;
        const{
            date1,
            date2
        }=request.body

        /**
         * exta função so mostra o numero de dias do ano que ja passou 
         * de forma simples, considerando que todo mes tem 30 dias, não é preciso
         */
        const initial_date = convertDateToDays(date1);
        const final_date = convertDateToDays(date2);

        /**
         * esta função foi feita para caso a data final do aluguel ser no ano seguinte
         * ou o aluguel ser de apenas um dia
         */
        const vlaue = calculateValue(initial_date, final_date, cost);
        try {
            await db('rent').insert({
                initial_date,
                final_date,
                vlaue,
                client_id,
                car_id
            })
    
            return response.send('sucesso');
        } catch (error) {
            return response.status(400).json({
                error: 'Unexpected error while creating new rent'
            })
        }
        

    }

    async update(request: Request, response: Response){
        const {id, cost, date} = request.params;
        const {date2} = request.body;

        const final_date = convertDateToDays(date2);

        const vlaue = calculateValue(Number(date), final_date, cost);
        
        try {
            await db('rent').where('id',id).update({
                final_date,
                vlaue
            })

            return response.send();
        } catch (error) {
            return response.status(400).json({
                error: 'Unexpected error while update rent'
            })
        }

    }

}
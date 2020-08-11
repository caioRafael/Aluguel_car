import { Request, Response } from "express";
import db from "../database/connection";


export default class ClientController{
    async index (request: Request, response: Response){
        const client = await db('client').select('*');

        return response.json(client);
    }

    async create(request: Request, response: Response){
        const {
            name,
            email,
            password,
            whatsapp,
            cnh
        } = request.body;
        try {
            await db('client').insert({
                name,
                email,
                password,
                whatsapp,
                cnh
            });
            return response.json({message: "cliente cadasta"});
        } catch (error) {
            return response.status(400).json({
                error: 'Unexpected error while creating new client'
            })
        }
        
        
    }

    async update(request: Request, response: Response){
        const {id} = request.params;

        const {
            name,
            email,
            password,
            whatsapp,
            cnh
        } = request.body;

        await db('client').where('id',id).update({
            name,
            email,
            password,
            whatsapp,
            cnh
        });
        return response.json({message:'sucesso'});
    }
};
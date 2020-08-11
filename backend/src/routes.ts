import express from 'express';

import ClientController from './controller/clientController';
import CarController from './controller/carController';
import ModelController from './controller/modelController';
import RentController from './controller/rentController';
import SessionController from './controller/sessionController';
import ProfileController from './controller/profileController';

const routes = express.Router();

const clientController = new ClientController();
const carController = new CarController();
const modelController = new ModelController();
const rentController = new RentController();
const sessionController = new SessionController();
const profileController = new ProfileController();

routes.post('/client', clientController.create);
routes.get('/client', clientController.index);
routes.put('/client/:id', clientController.update);

routes.post('/car', carController.create);
routes.get('/car', carController.index);
routes.delete('/car/:id', carController.delete);

routes.post('/model', modelController.create);
routes.get('/model', modelController.index);

routes.post('/rent/:car_id/:cost', rentController.create);
routes.get('/rent', rentController.index);
routes.put('/rent/:id/:cost/:date', rentController.update);

routes.post('/sessions', sessionController.create);

routes.get('/profile', profileController.index);

export default routes;
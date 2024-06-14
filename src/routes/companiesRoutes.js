import express from 'express';
import CompaniesController from '../controllers/companiesController.js';

const routes = express.Router();

routes.get('/companies', CompaniesController.getAll);
routes.get('/companies/:id', CompaniesController.getById);
routes.post('/companies', CompaniesController.create);
routes.put('/companies/:id', CompaniesController.update);
routes.delete('/companies/:id', CompaniesController.delete);

export default routes;
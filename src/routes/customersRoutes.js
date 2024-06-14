import express from 'express';
import CustomersController from '../controllers/customersController.js';

const routes = express.Router();

routes.get('/customers', CustomersController.getAll);
routes.get('/customers/:id', CustomersController.getById);
routes.post('/customers', CustomersController.create);
routes.put('/customers/:id', CustomersController.update);
routes.delete('/customers/:id', CustomersController.delete);

export default routes;
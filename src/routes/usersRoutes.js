import express from 'express';
import UsersController from '../controllers/usersController.js';

const routes = express.Router();

routes.get('/users', UsersController.getAll);
routes.get('/users/:id', UsersController.getById);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.delete);

export default routes;
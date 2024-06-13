import express from 'express';
import UsersController from '../controllers/usersController.js';

const routes = express.Router();

routes.post('/login', UsersController.login);

export default routes;
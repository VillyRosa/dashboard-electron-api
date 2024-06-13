import express from 'express';
import users from './usersRoutes.js';
import auth from './authRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    auth,
    users,
  )
}

export default routes;
import express from 'express';
import auth from './authRoutes.js';
import companies from './companiesRoutes.js';
import users from './usersRoutes.js';
import customers from './customersRoutes.js'

const routes = (app) => {
  app.use(
    express.json(),
    auth,
    companies,
    users,
    customers
  )
}

export default routes;
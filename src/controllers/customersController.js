import { customer } from '../models/Customer.js';
import { company } from '../models/Company.js';

class CustomerController {

  static async getAll(req, res, next) {
    try {
      const users = await customer.find();
      res.status(200).json(users);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const findUser = await customer.findById(req.params.id);
      res.status(200).json(findUser);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async create(req, res, next) {
    const newUser = req.body;
    try {
      const findCompany = await company.findById(newUser.company);
      const completedUser = { ...newUser, company: findCompany };
      const createdUser = await customer.create(completedUser);
      res.status(201).json(createdUser);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res, next) {
    const updatedUser = req.body;
    try {
      const findCompany = await company.findById(updatedUser.company);
      const completedUser = { ...updatedUser, company: findCompany };
      await customer.findByIdAndUpdate(req.params.id, completedUser);
      res.status(200).json(completedUser);
      next();
    }
    catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await customer.findByIdAndDelete(req.params.id);
      res.status(204).send();
      next();
    } catch (error) {
      console.log(error);
    }
  }

}

export default CustomerController;
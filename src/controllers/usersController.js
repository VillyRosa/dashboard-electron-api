import { user } from '../models/User.js';
import { company } from '../models/Company.js';

class UsersController {

  static async getAll(req, res, next) {
    try {
      const users = await user.find();
      users.map((user) => {
        delete user.password;
      });
      res.status(200).json(users);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const findUser = await user.findById(req.params.id);
      delete findUser.password;
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
      const createdUser = await user.create(completedUser);
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
      await user.findByIdAndUpdate(req.params.id, completedUser);
      res.status(200).json(completedUser);
      next();
    }
    catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(204).send();
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const findUser = await user.findOne({ email, password });
      if (findUser) {
        delete findUser.password;
        res.status(200).json(findUser);
      } else {
        res.status(404).send({ message: 'User not found' });
      }
      next();
    } catch (error) {
      console.log(error);
    }
  }

}

export default UsersController;
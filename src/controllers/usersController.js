import { user } from '../models/User.js';

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
    try {
      const newUser = new user(req.body);
      await newUser.save();
      res.status(201).json(newUser);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res, next) {
    try {
      await user.findByIdAndUpdate(req.params.id, req.body);
      res.status(204).send();
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
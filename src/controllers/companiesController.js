import { company } from '../models/Company.js';

class CompaniesController {

  static async getAll(req, res, next) {
    try {
      const companies = await company.find();
      res.status(200).json(companies);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const findCompany = await company.findById(req.params.id);
      res.status(200).json(findCompany);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async create(req, res, next) {
    try {
      const newCompany = new company(req.body);
      await newCompany.save();
      res.status(201).json(newCompany);
      next();
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res, next) {
    try {
      await company.findByIdAndUpdate(req.params.id, req.body);
      res.status(204).send();
      next();
    }
    catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res, next) {
    try {
      await company.findByIdAndDelete(req.params.id);
      res.status(204).send();
      next();
    } catch (error) {
      console.log(error);
    }
  }

}

export default CompaniesController;
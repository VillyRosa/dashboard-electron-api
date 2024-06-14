import mongoose from 'mongoose';
import { companySchema } from './Company.js';

const customerSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { 
    type: String, 
    required: [true, 'Name is required']
  },
  email: { 
    type: String, 
  },
  phone: {
    type: String,
  },
  status: { 
    type: String, 
    required: [true, 'Status is required'],
    enum: {
      values: ['active', 'inactive'],
      message: 'Invalid status'
    }
  },
  company: {
    type: companySchema,
    required: [true, 'Company is required']
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const customer = mongoose.model('Customer', customerSchema);
export { customer, customerSchema };
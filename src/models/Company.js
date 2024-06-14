import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { 
    type: String, 
    required: [true, 'Name is required']
  },
  cnpj: {
    type: String,
    required: [true, 'CNPJ is required']
  },
  status: { 
    type: String, 
    required: [true, 'Status is required'],
    enum: {
      values: ['active', 'inactive'],
      message: 'Invalid status'
    }
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const company = mongoose.model('Company', companySchema);
export { company, companySchema };
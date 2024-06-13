import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { 
    type: String, 
    required: [true, 'Name is required']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
  },
  password: { 
    type: String, 
    required: [true, 'Password is required']
  },
  role: { 
    type: String, 
    required: [true, 'Role is required'],
    enum: {
      values: ['admin'],
      message: 'Invalid role'
    }
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

const user = mongoose.model('User', userSchema);
export { user, userSchema };
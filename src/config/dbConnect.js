import mongoose from 'mongoose';

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('\x1b[35m', 'Connected to database!');
    return mongoose.connection;
  } catch (error) {
    console.log('Error connecting to database: ', error);
  }
}

export default connectToDatabase;
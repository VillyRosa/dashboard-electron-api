import express from 'express';
import connectToDatabase from './config/dbConnect.js';
import cors from 'cors';
import routes from './routes/index.js';

const connect = await connectToDatabase();

connect.on('error', (erro) => {
  console.log('Error connecting to database: ', erro);
});

const app = express();
app.use(cors());
routes(app);

export default app;
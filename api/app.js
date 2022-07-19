import express from 'express';
import mongoose from 'mongoose';
import { verifyJWT } from './middlewares/verifyJWTMiddleware.js';
import printersRouter from './routes/printersRoute.js';
import signInRouter from './routes/signInRoute.js';
import signUpRouter from './routes/signUpRoute.js';
const app = express()
const port = 3000

app.use(express.json());

app.use('/', signInRouter);
app.use('/', signUpRouter);

app.use(verifyJWT);

app.use('/api/printers', printersRouter);

const start = async () => {
    try {
      await mongoose.connect(
        "mongodb://localhost:27017/PrintersDb"
      );
      app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  start();
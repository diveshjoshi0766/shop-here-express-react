import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/ProductRouter.js';
import path from 'path';
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
  });

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
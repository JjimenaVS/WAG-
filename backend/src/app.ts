import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

export default app;
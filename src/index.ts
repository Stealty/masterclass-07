import express from 'express';
import cors from 'cors';
import routes from './routes';
import UserController from './controllers/UserController';

const app = express();

app.use(cors());

app.use(routes);

app.listen(3333);
import express from 'express';
import config from './config';

import homeController from './controllers/home';
import apiController from './controllers/api';

const app = express();

app.set('port', config.port);
app.set('env', config.env);

app.get('/', homeController.index);

app.get('/api', apiController.getApi);

export default app;
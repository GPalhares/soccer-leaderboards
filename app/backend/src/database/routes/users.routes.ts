import express = require('express');

import UsersController from '../controllers/usersController';
import validateLoginFields from '../middlewares/validateLogin';

const app = express();
app.use(express.json());

app.post('/login', validateLoginFields, UsersController.login);

export default app;

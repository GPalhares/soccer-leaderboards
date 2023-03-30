import express = require('express');

import UsersController from '../controllers/usersController';
import validateLoginFields from '../middlewares/validateLogin';
import validadeToken from '../middlewares/validadeToken';

const app = express();
app.use(express.json());

app.post('/login', validateLoginFields, UsersController.login);
app.get('/login/role', validadeToken, UsersController.getRole);

export default app;

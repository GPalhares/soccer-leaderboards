import express = require('express');

import MatchesController from '../controllers/matchesController';
import validadeToken from '../middlewares/validadeToken';

const app = express();
app.use(express.json());

app.get('/matches', MatchesController.getMatches);
app.post('/matches', validadeToken, MatchesController.createMatch);
app.patch('/matches/:id/finish', validadeToken, MatchesController.finishingMatch);
app.patch('/matches/:id', validadeToken, MatchesController.updateMatchResult);

export default app;

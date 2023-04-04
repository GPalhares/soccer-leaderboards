import express = require('express');

import MatchesController from '../controllers/matchesController';

const app = express();
app.use(express.json());

app.get('/matches', MatchesController.getMatches);

export default app;

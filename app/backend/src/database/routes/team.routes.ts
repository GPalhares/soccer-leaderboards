import express = require('express');

import TeamController from '../controllers/teamController';

// const teamController = new TeamController();

const app = express();
app.use(express.json());

app.get('/teams', TeamController.getTeams);
app.get('/teams/:id', TeamController.getTeamById);

export default app;

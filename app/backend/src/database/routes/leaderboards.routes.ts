import express = require('express');
import LeaderboardsController from '../controllers/leaderboardsController';

const app = express();
app.use(express.json());

app.get('/leaderboards/home', LeaderboardsController.getHomeLeaderBoards);
app.get('/leaderboards/away', LeaderboardsController.getHomeLeaderBoards);
app.get('/leaderboards', LeaderboardsController.getLeaderBoards);

export default app;

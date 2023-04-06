import express = require('express');
import LeaderboardsController from '../controllers/leaderboardsController';

const app = express();
app.use(express.json());

app.get('/leaderboard/home', LeaderboardsController.getHomeLeaderBoards);
app.get('/leaderboard/away', LeaderboardsController.getAwayLeaderBoards);
app.get('/leaderboard', LeaderboardsController.getLeaderBoards);

export default app;

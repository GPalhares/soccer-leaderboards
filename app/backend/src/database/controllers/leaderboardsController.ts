import { Request, Response } from 'express';
import LeaderboardsService from '../services/leaderboardsService';
// import TeamService from '../services/teamService';

class LeaderBoardsController {
  // GET LeaderBoard
  public static async getLeaderBoards(req: Request, res: Response) {
    let matches = {};
    matches = await LeaderboardsService.getLeaderBoards();

    return res.status(200).json(matches);
  }
}

export default LeaderBoardsController;

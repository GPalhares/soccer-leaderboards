import { Request, Response } from 'express';
import TeamService from '../services/teamService';

class TeamController {
//   private teamService = new TeamService();

  public static async getTeams(req: Request, res: Response) {
    const teams = await TeamService.getTeams();
    res.status(200).json(teams);
  }
}

export default TeamController;
